describe('test in <DemoComponent />', () => { 
    test('This test should not fail', () => {

        // 1. Arrange
        const message1 = 'Hello World';
    
        // 2. Act
        const message2 = message1.trim();
    
        // 3. Assert
        expect( message1 ).toBe( message2 );
    
    });
})