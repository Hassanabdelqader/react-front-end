import {render,fireEvent,waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from '../App';
import Person from '../Components/Person';



describe('Test React and Value', function () {
  
  test('test Name', async () => {
      render(<Person/>)
      const name = await screen.findByTestId('name-element')
      expect(name).toHaveTextContent('hasan')
    })

    test('test Age', async () => {
      render(<Person/>)
      const age = await screen.findByTestId('age-element')
      expect(age).toHaveTextContent('25')
    })

    test('test Gender', async()=>{

      render(<Person/>)
      const gender = await screen.findByTestId('gender-element');
      expect(gender).toHaveTextContent('male')

    })

    it('test the lonely button',async()=>{
      render(<Person />);
      const button =  screen.getByTestId("lonlybtn-element")
      expect(button).not.toBeDisabled()
    })
   

});
