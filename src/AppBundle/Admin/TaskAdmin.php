<?

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class TaskAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('Содержание задания', array())
                ->add('taskText', 'text', array(
                    'label'=>'Текст задания'
                    ))
                ->add('useState',  ChoiceType::class, array(
                'choices'=> array(
                    'ЕГЭ' => true,
                    'ГИА' => false
                    ),
                'label' => 'Тип экзамена',
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
        $datagridMapper
            ->add('useState', 'doctrine_orm_boolean', array('label' => 'Тип экзамена'), null, array(
                'choices'=>array(
                    'ЕГЭ'=>true,
                    'ГИА'=>false
                    )
                ))
            ->add('subject', null, array('label'=>"Предмет"), 'entity', array(
            'class' => 'AppBundle\Entity\Subject',
            'choice_label' => 'name',
            ))
        ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('taskText')
            ->add('subject.name')
            ->add('useState', 'choice', array(
                'choices' => array(
                    false => 'ГИА',
                    true => 'ЕГЭ',
                    )
                ))
            ;
    }

    // public function toString($object)
    // {
    //     return $object->getName() ? $object->getName() : "Task";
    // }
}