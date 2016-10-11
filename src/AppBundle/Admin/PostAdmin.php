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
        ->tab('Post content')
            ->with('Content', array('class' => 'col-md-9'))
                ->add('title', 'text')
                ->add('body', 'textarea')
            ->end()
        ->end()

        ->tab('Post options')
            ->with('Meta data', array('class' => 'col-md-3'))
                ->add('category', 'sonata_type_model', array(
                    'class' => 'AppBundle\Entity\Category',
                    'property' => 'name',
                ))
            ->end()
        ->end()
    ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('id');
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper->addIdentifier('title');
        $listMapper->addIdentifier('body');
    }

    public function toString($object)
    {
        return $object->getTitle();
    }
}