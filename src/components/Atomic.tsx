import Input from '../atomic-design/atoms/Input/Input';
import SaveAndCancelButton from '../atomic-design/molecules/SaveAndCancelButton';

export default function Atomic() {
  function handelSave() {
    console.log('parent handel save !');
  }

  function handelCancel() {
    console.log('parent handel cancel !');
  }

  function handelOnChange(val: any) {
    console.log('parent handel onchange : ' + JSON.stringify(val));
  }

  return (
    <div>
      <h3 className=''>Button Component !</h3>
      <div>
        <SaveAndCancelButton onSave={handelSave} onCancel={handelCancel} />
      </div>

      <h3>Input</h3>
      <Input
        onChangeEvent={(val) => handelOnChange(val)}
        placeHolder='Input data !'
      />
    </div>
  );
}
