<?
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class FeedbackPageController extends DefaultController {
	/**
	* @Route("/feedback")  // what does name var do ? 
	*/
	public function showAction(Request $request){

		$authError = $this->getAuthError($request);

		return $this->render('default/feedback.html.twig', [
			'error' => $authError,
			]);
	}
}