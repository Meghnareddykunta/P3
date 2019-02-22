QUnit.test( "TestArea", function( assert ) 
{
            var res = area(1,2);
            assert.equal( res, "1", "Area of triangle with these inputs will be 1" );
});
         
         
QUnit.test( "TestArea", function( assert ) 
{
            var result = area(2,5);
            assert.equal( result, "5", "Area of triangle with these inputs will be 5" );
});

QUnit.test( "TestArea", function( assert ) 
{
            var res = area(7,8);
            assert.equal( res, "28", "Area of triangle with these inputs will be 28" );
});

QUnit.test( "TestArea", function( assert ) 
{
            var res = area(4,3);
            assert.equal( res, "6", "Area of triangle with these inputs will be 6" );
});

QUnit.test( "TestArea", function( assert ) 
{
            var res = area(3,6);
            assert.equal( res, "9", "Area of triangle with these inputs will be 9" );
});



