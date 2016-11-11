<?
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;


class UniversitiesPageController extends DefaultController {
	/**
	* @Route("/universities")  // what does name var do ? 
	*/
	public function showAction(Request $request){

		$em = $this->getDoctrine()->getManager();
       
        // $universities = $em
        //     ->getRepository('AppBundle:University')
        //     ->findAll();

		$universities = $em->createQuery('
							SELECT DBuniversity FROM AppBundle:University DBuniversity
							ORDER BY DBuniversity.city ASC
							')
							->getResult();

		$authError = $this->getAuthError($request);

		return $this->render('default/universities.html.twig',[
			'universities' => $universities,
			'error' => $authError,
			]);
	}

	/**
	* @Route("/universities/{university}")  
	*/
	public function showUniversityAction($university, Request $request){
		$em = $this->getDoctrine()->getManager();
		$DBuniversity = $em
            ->getRepository('AppBundle:University')
            ->findOneBy(
                array(
                    'name' => $university,
                ));

        $authError = $this->getAuthError($request);

		return $this->render('default/universityPage.html.twig', array(
			'university' => $DBuniversity,
			'error' => $authError,
			));
	}
}