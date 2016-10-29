<?
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class AboutPageController extends Controller {
	/**
	* @Route("/about")  // what does name var do ? 
	*/
	public function showAction(){
		return $this->render('default/about.html.twig');
	}
}