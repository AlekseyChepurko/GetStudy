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
     * @var string
     *
     * @ORM\Column(name="taskText", type="text")
     */
    private $taskText;

        
     /**
     * @var text
     *
     * @ORM\Column(name="answer", type="text")
     */
    private $answer;

    /**
    * @ORM\ManyToOne(targetEntity="TaskType", inversedBy="task")
    */
    private $taskType;

    /**
    * @ORM\ManyToOne(targetEntity="test", inversedBy="tasks")
    */
    private $test;

    public function getTest()
    {
        return $this->test;
    }

    public function setTest(\AppBundle\Entity\test $test)
    {
        $this->test = $test;
        return $this;
    }

    public function getTaskType()
    {
        return $this->taskType;
    }

    public function setTaskType(\AppBundle\Entity\TaskType $taskType)
    {
        $this->taskType = $taskType;
        return $this;
    }

    public function getAnswer()
    {
        return $this->answer;
    }

    public function setAnswer($answer)
    {
        $this->answer = $answer;
        return $this;
    }


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
