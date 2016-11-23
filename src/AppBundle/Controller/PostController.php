<?
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use AppBundle\Entity\Post;
use AppBundle\Entity\Comment;
use AppBundle\Form\ImageType;


class PostController extends DefaultController
{
    /**
     * @Route("/post/new", name="app_post_new")
     */
    public function newAction(Request $request)
    {
        $post = new Post();
        $form = $this->createForm(ImageType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // $file stores the uploaded PDF file
            /** @var Symfony\Component\HttpFoundation\File\UploadedFile $file */
            $file = $post->getImage();

            // Generate a unique name for the file before saving it
            $fileName = md5(uniqid()).'.'.$file->guessExtension();

            // Move the file to the directory where brochures are stored
            $file->move(
                $this->getParameter('images_directory'),
                $fileName
            );

            // Update the 'image' property to store the jpeg file name
            // instead of its contents
            $product->setImage($fileName);

            // ... persist the $product variable or any other work

            return $this->redirect($this->generateUrl('app_post_list'));
        }

        return $this->render('post/new.html.twig', array(
            'form' => $form->createView(),
        ));
    }


    /**
    * @Route("/post/{postId}")  
    */

    public function showPost($postId, Request $request){
        $em = $this->getDoctrine()->getManager();

        $post = $em
                ->getRepository('AppBundle:Post')
                ->findOneBy(array(
                    'id' => $postId,
                    ));

        $authError = $this->getAuthError($request);


        $comment  = new Comment();
        
        $postCommentForm = $this->createFormBuilder($comment)
            ->add('text', TextType::class, [
                'label' => "Комментарий к посту",
                'attr'=> ["class"=>"comment__wrap post_comment_form_text",
                        ]
                ])
            ->add('post', TextType::class, [
                'attr'=> ["id"=>"postId"]
                ])
            ->add('save', SubmitType::class, array(
                'label' => 'Отправить комментарий',
                ))
        ->getForm();

        $commentCommentForm = $this->createFormBuilder($comment)
            ->add('text', TextType::class, [
                'label' => "Ответ на комментарий",
                'attr'=> ["class"=>"comment__wrap comment_comment_form_text"]
                ])
            ->add('parentComment', TextType::class, [
                'attr'=> ["id"=>"commentId"]
                ])
            ->add('save', SubmitType::class, array(
                'label' => 'Отправить',
                ))
        ->getForm();

        return $this->render('default/post.html.twig', array(
            'post' => $post,
            'error' => $authError,
            'postCommentForm' => $postCommentForm->createView(),
            'commentCommentForm' => $commentCommentForm->createView(),
            ));
    }



}