<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TaskType
 *
 * @ORM\Table(name="task_type")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\TaskTypeRepository")
 */
class TaskType
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
     * @var string
     *
     * @ORM\Column(name="subName", type="string", length=255)
     */
    private $subName;


    /**
     * @var string
     *
     * @ORM\Column(name="taskLevel", type="string", length=1)
     */
    private $taskLevel;

    // *
    //  * @var bool
    //  *
    //  * @ORM\Column(name="useState", type="boolean")
     
    // private $useState; //united state exam or not

    /**
     * @var int
     *
     * @ORM\Column(name="taskNumber", type="integer")
     */
    private $taskNumber;

    public function getSubName()
    {
        return $this->subName;
    }

    public function setSubName($subName)
    {
        $this->subName = $subName;
        return $this;
    }

    // public function setUseState($state=false){
    //     $this->useState = $state;
    // }   

    // public function getUseState()
    // {
    //     return $this->useState;
    // }

    public function getTaskLevel()
    {
        return $this->taskLevel;
    }

    public function setTaskLevel($level)
    {
        $this->taskLevel = strtoupper($level);
        return $this;
    }

    public function getTaskNumber()
    {
        return $this->taskNumber;
    }

    public function setTaskNumber($number)
    {
        $this->taskNumber = $number;
        return $this;
    }

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
    * @ORM\OneToMany(targetEntity="Task", mappedBy="taskType")
    */
    private $task;

    /**
    * @ORM\ManyToOne(targetEntity="Subject", inversedBy="taskTypes")
    */
    private $subject;

    public function setSubject(\AppBundle\Entity\Subject $subject)
    {
        $this->subject = $subject;
        return $this;
    }

    public function getSubject()
    {
        return $this->subject;
    }

    public function getTask()
    {
        return $this->task;
    }

    public function setTask(\AppBundle\Entity\Task $task)
    {
        $this->task = $task;
        return $this;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return TaskType
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }
}

