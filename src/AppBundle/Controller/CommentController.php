<?

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
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

		$postId = $request->get('postId');

		$post = $em
					->getRepository('AppBundle:Post')
					->findOneBy(array(
						'id' => $postId,
						));


		$comment = new Comment;
		$comment->setText($request->get("commentText"));
		$comment->setAuthor($this->getUser());
		$comment->setPost($post);

		$em->persist($comment);
		$em->flush();

		return new Response(
		    'Everything is ok',
		    Response::HTTP_OK,
		    array('content-type' => 'text/html')
		);

	}

	public function NewCommentCommentAction(Request $request){

		if ($this->getUser() == NULL)
			return new Response(
			    'user is not authorized',
			    Response::HTTP_UNAUTHORIZED,
			    array('content-type' => 'text/html')
				); 

		$em = $this->getDoctrine()->getManager();

		$parentCommentId = $request->get('parentCommentId');

		$parentComment = $em
					->getRepository('AppBundle:Comment')
					->findOneBy(array(
						'id' => $parentCommentId,
						));

		$comment = new Comment;
		$comment->setText($request->get("commentText"));
		$comment->setAuthor($this->getUser());
		$parentComment->addChildComment($comment);
		$comment->setParentComment($parentComment);

		$em->persist($comment);
		$em->flush();

		return new Response(
			'Everything is ok',
		    Response::HTTP_OK,
		    array('content-type' => 'text/html'));
	}	
}