<?

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class SubjectAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('name', 'text', array(
                'label' => "Название предмета"
                ))
            ->add('useState', ChoiceType::class, array(
                'choices' => array(
                    'ГИА'=>'ГИА',
                    'ЕГЭ'=>'ЕГЭ',
                    ),
                'label' => "Название предмета"
                ))
            ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('name')
            ->add('useState', 'doctrine_orm_choice', array(
                'label' => 'Тип экзамена'), 'choice', array(
                'choices'=>array(
                    'ГИА'=>'ГИА',
                    'ЕГЭ'=>'ЕГЭ',
                    )
                ))

            ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name')
            ->add('useState')
        ;
    }

    public function toString($object)
    {
        return $object->getName() ? $object->getName() : "Subject";
    }
}