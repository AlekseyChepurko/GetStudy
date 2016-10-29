<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * UniversityFeedback
 *
 * @ORM\Table(name="university_feedback")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UniversityFeedbackRepository")
 */
class UniversityFeedback
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
     * @ORM\Column(name="feedaback_text", type="text")
     */
    private $feedabackText;

    /**
     * @var float
     *
     * @ORM\Column(name="user_rate", type="float")
     */
    private $userRate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="create_date", type="datetimetz")
     */
    private $createDate;


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
     * Set feedabackText
     *
     * @param string $feedabackText
     *
     * @return UniversityFeedback
     */
    public function setFeedabackText($feedabackText)
    {
        $this->feedabackText = $feedabackText;

        return $this;
    }

    /**
     * Get feedabackText
     *
     * @return string
     */
    public function getFeedabackText()
    {
        return $this->feedabackText;
    }

    /**
     * Set userRate
     *
     * @param float $userRate
     *
     * @return UniversityFeedback
     */
    public function setUserRate($userRate)
    {
        $this->userRate = $userRate;

        return $this;
    }

    /**
     * Get userRate
     *
     * @return float
     */
    public function getUserRate()
    {
        return $this->userRate;
    }

    /**
     * Set createDate
     *
     * @param \DateTime $createDate
     *
     * @return UniversityFeedback
     */
    public function setCreateDate($createDate)
    {
        $this->createDate = $createDate;

        return $this;
    }

    /**
     * Get createDate
     *
     * @return \DateTime
     */
    public function getCreateDate()
    {
        return $this->createDate;
    }
}

