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
        
            ->with('Content', array('class' => 'col-md-9'))
                ->add('title', 'text')
                ->add('body', 'textarea')
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
    }

    public function toString($object)
    {
        return $object->getTitle();
    }
}