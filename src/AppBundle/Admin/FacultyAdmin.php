<?

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;

class FacultyAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with("Общие сведения о факультете", array(
                'class' => 'col-md-9',
                'enctype' => 'multipart/form-data',
                ))
                ->add('name', 'text')
                ->add('site', 'text')
                ->add('phone', 'text')
                ->add('email', 'text')
                ->add('description', 'text')
            ->end()

            ->with("ВУЗ", array('class' => 'col-md-3'))
                ->add('university', 'sonata_type_model', array(
                    'class' => 'AppBundle\Entity\University',
                    'property' => 'name',
                    ))
            ->end()
            ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('name');
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name')
            ->add('university.name')
            ->add('site')
            ->add('phone')
            ->add('email')
            ->add('description')
            ;
    }

    public function toString($object)
    {
        return $object->getName() ? $object->getName() : "Faculty";
    }
}