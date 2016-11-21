<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\HttpFoundation\Session\Session;


class DefaultController extends Controller
{

    //private $error;
    private $request;
    private $session;
    
    public function getAuthError(Request $request){
         // Geting auth error
        $this->session = $request->getSession();

        $authErrorKey = Security::AUTHENTICATION_ERROR;
        $lastUsernameKey = Security::LAST_USERNAME;

        // get the error if any (works with forward and redirect -- see below)
        if ($request->attributes->has($authErrorKey)) {
            $error = $request->attributes->get($authErrorKey);
        } elseif (null !== $this->session && $this->session->has($authErrorKey)) {
            $error = $this->session->get($authErrorKey);
            $this->session->remove($authErrorKey);
        } else {
            $error = null;
        }

        if (!$error instanceof AuthenticationException) {
            $error = null; // The value does not come from the security component.
        }

        // last username entered by the user
        $lastUsername = (null === $this->session) ? '' : $this->session->get($lastUsernameKey);
        $csrfToken = $this->get('security.csrf.token_manager')->getToken('authenticate')->getValue();
        return $error;
    }


}
