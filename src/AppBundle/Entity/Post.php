<?php

namespace AppBundle\Entity;
use AppBundle\Entity\Comment;
use Doctrine\Common\Collections\ArrayCollection;

use Doctrine\ORM\Mapping as ORM;

/**
 * Post
 *
 * @ORM\Table(name="post")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\PostRepository")
 */
class Post
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
     * @ORM\Column(name="title", type="string", length=255)
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="body", type="text")
     */
    private $body;

    /**
     * @var datetime
     *
     * @ORM\Column(name="updated", type="datetime")
     */
    private $updated;


    /**
    * @ORM\ManyToMany(targetEntity="Image", inversedBy="Posts", indexBy="id")

    * @ORM\JoinTable(name="PostsToImages",
        * joinColumns={
        *       @ORM\JoinColumn(name="post_id", referencedColumnName="id")
        *    },
        * inverseJoinColumns={
        *       @ORM\JoinColumn(name="image_id", referencedColumnName="id")
        *    }
        *)
    */
    private $images;

    public function getImages() {
        return $this->images;
    }

    public function md5name(){
        return $this->getImage()->md5name;
    }

    public function addImage($image){
        $this->images[$image->getId()] = $image;
        return $this;
    }

    public function removeImage($image){
        $this->images->removeElement($image);
    }

    public function setImages($images){
        $this->images = $images;
    }

    /**
     * @var bool
     *
     * @ORM\Column(name="draft", type="boolean")
     */
    private $draft=false;


    /**
     * @ORM\ManyToOne(targetEntity="Category", inversedBy="Posts")
     */
    private $category;

    public function setCategory(Category $category)
    {
        $this->category = $category;
    }

    public function getCategory()
    {
        return $this->category;
    }

    
    private $commentForm;
    function __construct(){
        $this->comments = new ArrayCollection();
        $this->images = new ArrayCollection();

        // $comment = new Comment();

        // $this->commentForm = $this->createFormBuilder($comment);
    }

    /**
     * @ORM\OneToMany(targetEntity="Comment", mappedBy="post")
     */
    private $comments;

    public function getComments(){
        return $this->comments;
    }

    public function addComment(\AppBundle\Entity\Comment $comment){

        $this->comments[] = $comment;
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
     * Set title
     *
     * @param string $title
     *
     * @return Post
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set body
     *
     * @param string $body
     *
     * @return Post
     */
    public function setBody($body)
    {
        $this->body = $body;

        return $this;
    }

    /**
     * Get body
     *
     * @return string
     */
    public function getBody()
    {
        return $this->body;
    }

    /**
     * Set draft
     *
     * @param boolean $draft
     *
     * @return Post
     */
    public function setDraft($draft)
    {
        $this->draft = $draft;

        return $this;
    }

    /**
     * Get draft
     *
     * @return bool
     */
    public function getDraft()
    {
        return $this->draft;
    }

    /**
     * Set updated
     *
     * @param \DateTime $updated
     *
     * @return Post
     */
    public function setUpdated($updated)
    {
        $this->updated = $updated;

        return $this;
    }

    /**
     * Get updated
     *
     * @return \DateTime
     */
    public function getUpdated()
    {
        return $this->updated;
    }
}
