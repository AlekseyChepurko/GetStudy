<?
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class UniversitiesPageController extends Controller {
	/**
	* @Route("/feedback")  // what does name var do ? 
	*/
	public function showAction(){
		return $this->render('default/universities.html.twig');
	}
}