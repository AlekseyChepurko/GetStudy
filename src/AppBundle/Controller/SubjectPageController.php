<?

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class SubjectPageController extends DefaultController{


    /**
     * @Route("/{examLevel}/{subject}")
     */
	public function showSubjectAction($examLevel, $subject, Request $request){

		$em = $this->getDoctrine()->getManager();

		$authError = $this->getAuthError($request);

		$queryBuilder = $em->createQueryBuilder();

		$tasks = $queryBuilder->select('task')
								->from('AppBundle:Task', 'task')
								->innerJoin('task.taskType', 'taskType')
								->innerJoin('taskType.subject', 'subject')
								->where("subject.name=:subject")
								->andWhere("subject.useState=:examLevel")
								->setParameter('subject', $subject)
								->setParameter('examLevel', $examLevel)
								->getQuery()
								->getResult();


		// var_dump($tasks);
		return $this->render('default/subjects.html.twig', array(
			'error' => $authError,
			'tasks' => $tasks
			));
	}

	/**
     * @Route("/subjects", name="subjects_page")
     */
	public function showLevelChoiceAction(Request $request)
	{
		$em = $this->getDoctrine()->getManager();

		$authError = $this->getAuthError($request);

		$useSubjects = $em
						->getRepository('AppBundle:Subject')
						->findByUseState("егэ")
						;

		$bseSubjects =  $em
						->getRepository('AppBundle:Subject')
						->findByUseState("гиа")
						;

		return $this->render('default/choiceSubject.html.twig', array(
			'error' => $authError,
			'useSubjects' => $useSubjects,
			'bseSubjects' => $bseSubjects
			));
	}

}