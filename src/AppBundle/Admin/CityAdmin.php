<?

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;

class CityAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('Content', array(
                'class'=> 'col-md-9',
                'enctype' => 'multipart/form-data',
                ))
                    ->add('name', 'text')
            ->end()

            ->with('Meta data', array('class' => 'col-md-3'))
                ->add('region', 'sonata_type_model', array(
                    'class' => 'AppBundle\Entity\Region',
                    'property' => 'name',
                    ))
            ->end()
            ;


    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('name')
            ->add('region', null, array(), 'entity', array(
            'class' => 'AppBundle\Entity\Region',
            'choice_label' => 'name',
            ))
            ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name')
            ->add('region.name')
            ;

    }

    public function toString($object)
    {
        return $object->getName() ? $object->getName() : "City";
    }
}