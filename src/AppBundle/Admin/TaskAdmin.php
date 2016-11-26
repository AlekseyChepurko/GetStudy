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
                ->add('level',  ChoiceType::class, array(
                'choices'=> array(
                    'B' => 'B',
                    'A' => 'A',
                    'C' => 'C'
                    ),
                'label' => 'Сложность задания (часть)',
                ))

                ->add('number', null, array(
                    'label'=>'Номер задания'
                    ))

                ->add('taskType', 'sonata_type_model_list', array(
                    'label'=>'Тип задания',
                    
                    ))


                ->add('taskText', 'text', array(
                    'label'=>'Текст задания'
                    ))
                ->add('answer', 'text', array(
                    'label'=>'Ответ'
                    ))
            ->end()

            ->with('Выбрать предмет', array('class' => 'col-md-3'))
                ->add('subject', 'sonata_type_model', array(
                    'class' => 'AppBundle\Entity\Subject',
                    'property' => 'name',
                    'label'=>'Предмет'
                ))
                ->add('useState',  ChoiceType::class, array(
                'choices'=> array(
                    'ЕГЭ' => true,
                    'ГИА' => false
                    ),
                'label' => 'Тип экзамена',
                ))
          
            ->end();
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('taskType.subject', null, array('label'=>"Предмет"), 'entity', array(
            'class' => 'AppBundle\Entity\Subject',
            'choice_label' => 'name',
            ))
            ->add('taskType.useState', 'doctrine_orm_boolean', array('label' => 'Тип экзамена'), null, array(
                'choices'=>array(
                    'ЕГЭ'=>true,
                    'ГИА'=>false
                    )
                ))
            ->add('taskType.taskLevel', 'doctrine_orm_boolean', array('label' => 'Сложность задания (часть)'), null, array(
                'choices'=>array(
                    'B' => 'B',
                    'A' => 'A',
                    'C' => 'C'
                    )
                ))
            ->add('taskType.taskNumber', null, array('label'=>"Номер задания"))
        ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->add('id')
            ->addIdentifier('taskText')
            ->add('answer')
            ->add('taskType.taskLevel')
            ->add('taskType.taskNumber')
            // ->add('type')
            ->add('taskType.subject.name')
            ->add('taskType.useState', 'choice', array(
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