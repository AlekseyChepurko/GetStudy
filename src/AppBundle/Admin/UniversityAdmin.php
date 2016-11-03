<?

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;

class UniversityAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
        	->with('Общие сведения', array(
        		"class" => 'col-md-9',
        		'enctype' => 'multipart/form-data',
        		))
	        	->add('name', 'text')
	        	->add('phone', 'text')
	        	->add('email', 'text')
	        	->add('adress', 'text')
	        	->add('site', 'text')
	        	->add('description', 'text')
	        ->end()

	        ->with('Дополнительно', array('class' => 'col-md-3'))
	         ->add('city', 'sonata_type_model', array(
	         	'class' => 'AppBundle\Entity\City',
	         	'property' => 'name'
	         	))
	        ->end()
    	;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
	        ->add('name');
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
        	->addIdentifier('name')
        	->add('city.name')
        	->add('city.region.name', 'bla')
        	->add('email')
        	->add('adress')
        	->add('phone')
        	->add('site')
        	->add('description')

        	;
    }

    public function toString($object)
    {
        return $object->getName() ? $object->getName() : "Unoversity";
    }
}