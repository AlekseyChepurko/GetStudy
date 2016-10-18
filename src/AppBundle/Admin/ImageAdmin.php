<?

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;

class ImageAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        

        $formMapper
            ->add('file', 'file', array('required' => false))
            // ... other fields can go here ...
        ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
  
        $listMapper->addIdentifier('id');
        $listMapper->addIdentifier('name');
        $listMapper->addIdentifier('updated');
        $listMapper
            ->add('image','image', array('template' => 'AppBundle::adminImageField.html.twig'))
        ;

    }

    public function prePersist($image) {
    	
        $this->manageFileUpload($image);
    }

    public function preUpdate($image) {
    	
        $this->manageFileUpload($image);
    }

    private function manageFileUpload($image) {

        if ($image->getFile()) {
        	// var_dump($image);
            $image->refreshUpdated();
        }
    }

    // ...
}