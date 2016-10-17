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
            ->add('file', 'file', $fileFieldOptions)
            // ... other fields can go here ...
        ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
    	$image = $this->getSubject();
        
        $fileFieldOptions = array('required' => false);
        if ($image && ($webPath = $image->getWebPath())) {
            // get the container so the full path to the image can be set
            $container = $this->getConfigurationPool()->getContainer();
            $fullPath = $webPath;

            // add a 'help' option containing the preview's img tag
            $fileFieldOptions['help'] = '<img src="'.$fullPath.'" class="admin-preview" />';
        }
        $listMapper->addIdentifier('id');
        $listMapper->addIdentifier('name');
        // $listMapper->add('Posts');
        // var_dump($this->Posts);
    }

    public function prePersist($image) {
    	
        $this->manageFileUpload($image);
    }

    public function preUpdate($image) {
    	
        $this->manageFileUpload($image);
    }

    private function manageFileUpload($image) {

        if ($image->getFile()) {
            $image->refreshUpdated();
        }
    }

    // ...
}