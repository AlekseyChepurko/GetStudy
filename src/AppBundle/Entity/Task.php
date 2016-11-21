<?
 namespace AppBundle\Entity;

 use Doctrine\ORM\Mapping as ORM;
 use Doctrine\Common\Collections\ArrayCollection;


/**
 * Task
 *
 * @ORM\Table(name="task")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\TaskRepository")
 */
 class Task{

    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="Subject", inversedBy="tasks")
     */
    private $subject;


    /**
     * @var string
     *
     * @ORM\Column(name="taskText", type="text")
     */
    private $taskText;

    public function getTaskText(){
    	return $this->taskText;
    }

    public function setTaskText($taskText){
    	$this->taskText = $taskText;
    	return $this;
    }

    public function getSubject(){
    	return $this->subject;
    }

    public function setSubject(\AppBundle\Entity\Subject $subject){
    	$this->subject = $subject;
    	return $this;
    }

    public function getId(){
    	return $this->id;
    }
 };
