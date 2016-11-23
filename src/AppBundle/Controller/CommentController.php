<?

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use AppBundle\Entity\Comment;


class CommentController extends DefaultController {

	public function NewPostCommentAction(Request $request){
		
		if ($this->getUser() == NULL)
			return new Response(
			    'user is not authorized',
			    Response::HTTP_UNAUTHORIZED,
			    array('content-type' => 'text/html')
				); 

		$em = $this->getDoctrine()->getManager();

		$postId = $request->get('form')['post'];

		$post = $em
					->getRepository('AppBundle:Post')
					->findOneBy(array(
						'id' => $postId,
						));


		$comment = new Comment;
		$comment->setText($request->get("form")['text']);
		$comment->setAuthor($this->getUser());
		$comment->setPost($post);

		$response = new JsonResponse();
		$response->setData(array(
			'commentText' => $comment->getText(),
			'commentAuthor' => $this->getUser()->getUsername()
			));

		$em->persist($comment);
		$em->flush();


		return $response;

	}

	public function NewCommentCommentAction(Request $request){

		if ($this->getUser() == NULL)
			return new Response(
			    'user is not authorized',
			    Response::HTTP_UNAUTHORIZED,
			    array('content-type' => 'text/html')
				); 

		$em = $this->getDoctrine()->getManager();

		$parentCommentId = $request->get('form')['parentComment'];

		$parentComment = $em
					->getRepository('AppBundle:Comment')
					->findOneBy(array(
						'id' => $parentCommentId,
						));

		$comment = new Comment;
		$comment->setText($request->get('form')['text']);
		$comment->setAuthor($this->getUser());
		$parentComment->addChildComment($comment);
		$comment->setParentComment($parentComment);

		$response = new JsonResponse();
		$response->setData(array(
			'commentText' => $comment->getText(),
			'commentAuthor' => $this->getUser()->getUsername()
			));

		$em->persist($comment);
		$em->flush();

		return $response;
		// return new Response(
		// 	'Everything is ok',
		//     Response::HTTP_OK,
		//     array('content-type' => 'text/html'));
	}	
}