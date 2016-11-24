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

    /**
     * @var bool
     *
     * @ORM\Column(name="useState", type="boolean")
     */
    private $useState; //united state exam or not


    /**
     * @var string
     *
     * @ORM\Column(name="level", type="string", length=1)
     */
    private $level; // A, B, C


    /**
     * @var string
     *
     * @ORM\Column(name="type", type="string")
     */
    private $type;

    /**
     * @var int
     *
     * @ORM\Column(name="number", type="integer")
     */
    private $number;

        
     /**
     * @var text
     *
     * @ORM\Column(name="answer", type="text")
     */
    private $answer;

    public function getAnswer()
    {
        return $this->answer;
    }

    public function setAnswer($answer)
    {
        $this->answer = $answer;
        return $this;
    }

    public function getLevel()
    {
        return $this->level;
    }

    public function setLevel($level="A")
    {
        if (is_string($level))
            $this->level = strtoupper($level);
        
        return $this; 
    }


    public function getType()
    {
        return $this->type;
    }

    public function setType($type)
    {
        if (is_string($type))
            $this->type = $type;
        
        return $this; 
    }

    public function getNumber()
    {
        return $this->number;
    }

    public function setNumber($number=1)
    {
        $this->number = $number;
        return $this;
    }

    public function setUseState($state=false){
        $this->useState = $state;
    }   

    public function getUseState()
    {
        return $this->useState;
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
