<?php

namespace AppBundle\Entity;
use Doctrine\Common\Collections\ArrayCollection;


use Doctrine\ORM\Mapping as ORM;

/**
 * Subject
 *
 * @ORM\Table(name="subject")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\SubjectRepository")
 */
class Subject
{
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
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    

    /**
    * @ORM\OneToMany(targetEntity="Task", mappedBy="subject")
    */
    private $tasks;

    /**
    * @ORM\OneToMany(targetEntity="TaskType", mappedBy="subject")
    */
    private $taskTypes;

    public function getTaskTypes()
    {
        return $this->taskTypes;
    }

    public function addTaskType(\AppBundle\Entity\TaskType $taskType)
    {
            $this->taskTypes[] = $taskType;
            return $this;
    }

    public function __construct(){
    	$this->tasks = new ArrayCollection();
        $this->taskTypes = new ArrayCollection();
    }

    public function addTask(\AppBundle\Entity\Task $task){
    	
    	$this->Tasks[] = $task;

    	return $this;
    }

    public function getTasks(){
    	return $this->tasks;
    }

    public function setName($name){
    	$this->name = $name;
    	return $this;
    }

    public function getName(){
    	return $this->name;
    }

    public function getId(){
    	return $this->id;
    }



    
}