<?

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;

class PostAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
        
            ->with('Content', array(
                'class' => 'col-md-9',
                'enctype' => 'multipart/form-data'
                ))
                    ->add('title', 'text')
                    ->add('body', 'textarea')
                    ->add('image', 'sonata_type_admin', array('delete'=>false))
            ->end()
        
            ->with('Meta data', array('class' => 'col-md-3'))
                ->add('category', 'sonata_type_model', array(
                    'class' => 'AppBundle\Entity\Category',
                    'property' => 'name',
                ))
          
        ->end()
    ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('id');
        $datagridMapper->add('category', null, array(), 'entity', array(
            'class' => 'AppBundle\Entity\Category',
            'choice_label' => 'name',
            ));
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper->addIdentifier('id');
        $listMapper->addIdentifier('title');
        $listMapper->addIdentifier('body');
        $listMapper->add('category.name');
        $listMapper->add('updated');
        $listMapper->add('image', 'file', array(
            'template'=> 'AppBundle::adminPostImageField.html.twig'
            ));
    }

    public function prePersist($post) {
        $post->setUpdated(new \DateTime("now"));
        $this->manageEmbeddedImageAdmins($post);
    }

    public function preUpdate($post) {
        $post->setUpdated(new \DateTime("now"));
        $this->manageEmbeddedImageAdmins($post);
    }

    private function manageEmbeddedImageAdmins($post) {
        // Cycle through each field
        
        foreach ($this->getFormFieldDescriptions() as $fieldName => $fieldDescription) {
            // detect embedded Admins that manage Images
            if ($fieldDescription->getType() === 'sonata_type_admin' &&
                ($associationMapping = $fieldDescription->getAssociationMapping()) &&
                $associationMapping['targetEntity'] === 'AppBundle\Entity\Image'
            ) {
                $getter = 'get' . ucfirst($fieldName);
                $setter = 'set' . ucfirst($fieldName);
                /** @var Image $image */
                $image = $post->$getter();
                if ($image) {
                    if ($image->getFile()) {
                        // update the Image to trigger file management
                        $image->refreshUpdated();
                    } elseif (!$image->getFile() && !$image->getName()) {
                        // prevent Sf/Sonata trying to create and persist an empty Image
                        $post->$setter(null);
                    }
                }
            }
        }
    }

    public function toString($object)
    {
        return $object->getTitle();
    }
}