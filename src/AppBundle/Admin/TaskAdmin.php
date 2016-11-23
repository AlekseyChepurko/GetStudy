<?

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;

class TaskAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('Содержание задания', array())
                ->add('taskText', 'text', array(
                    'label'=>'Текст задания'
                    ))
            ->end()

            ->with('Выбрать предмет', array('class' => 'col-md-3'))
                ->add('subject', 'sonata_type_model', array(
                    'class' => 'AppBundle\Entity\Subject',
                    'property' => 'name',
                    'label'=>'Предмет'
                ))
          
            ->end();
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('taskText');
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper->addIdentifier('taskText');
    }

    public function toString($object)
    {
        return $object->getName() ? $object->getName() : "Task";
    }
}