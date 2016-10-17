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
        // $formMapper->add('title', 'text'); //string
        // $formMapper->add('body', 'textarea');
        // $formMapper
        //     ->add('category', 'sonata_type_model', array(
        //         'class' => 'AppBundle\Entity\Category',
        //         'property' => 'name',
        //         ));
        $formMapper
        
            ->with('Content', array(
                'class' => 'col-md-9',
                'enctype' => 'multipart/form-data'
                ))
                    ->add('title', 'text')
                    ->add('body', 'textarea')
                    // ->add('image', 'sonata_type_admin', array(
                    //     'data_class' => 'AppBundle\Entity\Image',
                    //     'btn_adsd' => 'name',
                    //     ))
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
        $listMapper->addIdentifier('title');
        $listMapper->addIdentifier('body');
        $listMapper->add('category.name');
        $listMapper->add('image.name');
    }

    public function prePersist($page) {
        $this->manageEmbeddedImageAdmins($page);
    }

    public function preUpdate($page) {
        var_dump("preUpdate");
        $this->manageEmbeddedImageAdmins($page);
    }

    private function manageEmbeddedImageAdmins($page) {
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
                $image = $page->$getter();
                if ($image) {
                    if ($image->getFile()) {
                        // update the Image to trigger file management
                        $image->refreshUpdated();
                    } elseif (!$image->getFile() && !$image->getName()) {
                        var_dump("expression");
                        // prevent Sf/Sonata trying to create and persist an empty Image
                        $page->$setter(null);
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