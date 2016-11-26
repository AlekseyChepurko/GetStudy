<?

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class SubjectPageController extends DefaultController{


    /**
     * @Route("/subjects", name="subjects_page")
     */
	public function showSubjectsAction(Request $request){

		$em = $this->getDoctrine()->getManager();

		$subjects = $em
					->getRepository('AppBundle:Subject')
					->findAll()
					;	

		$authError = $this->getAuthError($request);

		return $this->render('default/subjects.html.twig', array(
			'subjects' => $subjects,
			'error' => $authError,
			));
	}

}