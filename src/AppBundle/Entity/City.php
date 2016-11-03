<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * City
 *
 * @ORM\Table(name="city")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\CityRepository")
 */
class City
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
     * @ORM\Column(name="name", type="string", length=255, nullable=true, unique=true)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\ManyToOne(targetEntity="Region", inversedBy="cities", cascade={"persist"})
     */
    private $region;


     /**
    * @ORM\OneToMany(targetEntity="University", mappedBy="city")
    */
    private $universities;

    public function getUniversities() {
        return $this->universities;
    }

    public function addUniversity(University $university) {
        array_push($this->universities, $university);
    }

     /**
     * Get region
     *
     */
    public function getRegion()
    {
        return $this->region;
    }

    /**
     * Set Region
     *
     */
    public function setRegion(Region $region)
    {
        $this->region = $region;
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
     * Set name
     *
     * @param string $name
     *
     * @return City
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

