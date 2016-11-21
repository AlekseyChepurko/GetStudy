<?

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class SubjectPageController extends DefaultController{


    /**
     * @Route("/subjects", name="subjects_page")
     */
	public function showSubjectsAction(Request $request){


		return $this->render('default/subjects.html.twig');
	}

}