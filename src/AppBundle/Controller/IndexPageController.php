<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\Exception\AuthenticationException;


class IndexPageController extends DefaultController
{

    // private $var;
    // private $session;


    // function __construct(){
    //     $this->session = new Session();
    //     $this->var = "bla bla";

    // }

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


        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
            'posts' => $posts,
            'error' => $authError,
        ]);
    }



}
