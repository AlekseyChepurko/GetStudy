<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Comment
 *
 * @ORM\Table(name="comment")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\CommentRepository")
 */
class Comment
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
     * @ORM\Column(name="author", type="string", length=255)
     */
    private $author;

    /**
     * @var string
     *
     * @ORM\Column(name="text", type="text")
     */
    private $text;


    /**
     * @ORM\ManyToOne(targetEntity="Post", inversedBy="comments")
     */
    private $post;

    /**
     * @Assert\DateTime()
     */
    protected $creationTime;


    /**
    *   @ORM\OneToMany(targetEntity="Comment", mappedBy="parentComment")
    */
    private $childComments;

    public function getChildComments(){
        return $this->childComments;
    }

    public function addChildComment(Comment $comment){
        $this->childComments[] = $comment;
    }

    /**
    *   @ORM\ManyToOne(targetEntity="Comment", inversedBy="childComments")
    *   @ORM\JoinColumn(name="parentComment_id", referencedColumnName="id")
    */
    private $parentComment;

    public function setParentComment(Comment $comment){
        $this->parentComment = $comment;

        return $this;
    }

    public function getParentComment(){
        return $this->parentComment;
    }


    public function setPost (Post $post){
        $this->post = $post;
        return $this;
    }

    public function getPost(){
        return $this->post;
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
     * Set author
     *
     * @param string $author
     *
     * @return Comment
     */
    public function setAuthor($author)
    {
        $this->author = $author;

        return $this;
    }

    /**
     * Get author
     *
     * @return string
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * Set text
     *
     * @param string $text
     *
     * @return Comment
     */
    public function setText($text)
    {
        $this->text = $text;

        return $this;
    }

    /**
     * Get text
     *
     * @return string
     */
    public function getText()
    {
        return $this->text;
    }

    public function __construct(){
        $this->childComments = new ArrayCollection();
    }
}

