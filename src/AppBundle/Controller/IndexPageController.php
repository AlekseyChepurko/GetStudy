<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use AppBundle\Entity\Comment;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class IndexPageController extends DefaultController
{
    /**
     * @Route("/", name="homepage")
     */
    public function showAction(Request $request)
    {
        
        $em = $this->getDoctrine()->getManager();
       
        $category = $em
            ->getRepository('AppBundle:Category')
            ->findOneBy(
                array(
                    'name' => 'Main Posts',
                ));

        $posts = $category->getPosts()->getValues();
        $posts = array_reverse($posts);


       $authError = $this->getAuthError($request);


       $comment  = new Comment();
       $form = $this->createFormBuilder($comment)
                        ->add('text', TextType::class, [
                            'label' => "Текст",
                            'attr'=> ["class"=>"comment__wrap"]
                            ])
                        ->add('save', SubmitType::class, array(
                            'label' => 'Оставить комментарий',
                            ))
                        ->getForm();
       ;

        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
            'posts' => $posts,
            'error' => $authError,
            'commentForm' => $form->createView(),
        ]);
    }



}
