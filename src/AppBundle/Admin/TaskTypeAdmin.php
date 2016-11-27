<?

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;


class TaskTypeAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('Задание', array(
                'class' => 'col-md-4'
                ))
                // ->add('subject.useState', 'choice', array(
                // 'choices'=> array(
                //     'ЕГЭ' => true,
                //     'ГИА' => false
                //     ),
                // 'label' => 'Тип экзамена',
                // ))
                ->add('taskLevel',  ChoiceType::class, array(
                    'choices'=> array(
                        'B' => 'B',
                        'A' => 'A',
                        'C' => 'C'
                        ),
                    'label' => 'Сложность задания (часть)',
                    ))
                ->add('taskNumber', 'integer', array(
                    'label' => "Номер задания"
                    ))
                ->add('name', 'text', array(
                    'label' => 'Категория заданий'
                    ))
                ->add('subName', 'text', array(
                    'label' => "Тип задания (название)"
                    ))
            ->end()

            ->with('Предмет', array(
                'class' => 'col-md-5'
                ))
                ->add('subject', 'sonata_type_model_list', array(
                    'label' => 'Предмет',
                    "btn_list" => 'Список предметов',
                    'btn_add' => 'Добавить предмет',
                    "btn_delete" => 'Очистить выбор'
                    ))
            ->end()
            ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('subject', null, array(), 'entity', array(
                'class' => 'AppBundle\Entity\Subject',
                'choice_label' => 'name',
                'label' => 'Предмет'
                ))
            ->add('subject.taskType.useState', 'doctrine_orm_choice', array('label' => 'Тип экзамена'), 'choice', array(
                'choices'=>array(
                    'ГИА'=>'ГИА',
                    'ЕГЭ'=>'ЕГЭ',
                    )
                ))
            ->add('taskLevel', 'doctrine_orm_choice', array('label' => 'Сложность задания (часть)'), 'choice', array(
                'choices'=>array(
                    'B' => 'B',
                    'A' => 'A',
                    'C' => 'C'
                    )
                ))
            ->add('taskNumber', 'doctrine_orm_number')
            ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name', null, array())
            ->addIdentifier('subName')
            ->add('subject.name')
            ->add('taskLevel')
            ->add('taskNumber')
            ->add('subject.useState')
        ;
    }

    public function toString($object)
    {
        return $object->getName() ? $object->getName() : "TaskType";
    }
}