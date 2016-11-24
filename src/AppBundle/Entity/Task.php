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
     * @ORM\Column(name="type", type="string", length=1)
     */
    private $type; // A, B, C

    /**
     * @var int
     *
     * @ORM\Column(name="number", type="integer")
     */
    private $number;

    public function getType()
    {
        return $this->type;
    }

    public function setType($type="A")
    {
        if (is_string($type))
            $this->type = strtoupper($type);
        
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
