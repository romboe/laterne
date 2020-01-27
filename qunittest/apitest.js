QUnit.module( "module", {
    /*
    beforeEach: function( assert ) {
      assert.ok( true, "one extra assert per test" );
    }, afterEach: function( assert ) {
      assert.ok( true, "and one extra assert after each test" );
    },
    setup: function() {
        // this.usedAcrossTests = "hello"; // add it to current context 'this'
    }
    */
});

QUnit.test( "getVector", function( assert ) {    
    const p1 = {x:1, y:1};
    const p2 = {x:5, y:4};
    const v = laterne.getVector(p1, p2);
    laterne.logVector(v);
    assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "getVectorLength", function( assert ) {  
    const p1 = {x:1, y:1};
    const p2 = {x:5, y:4};
    const v = laterne.getVector(p1, p2);
    const length = laterne.getVectorLength(v);
    assert.equal(length, 5);
});

QUnit.test( "getNormalVectors", function( assert ) {  
    const p1 = {x:1, y:1};
    const p2 = {x:5, y:4};
    const v = laterne.getVector(p1, p2);
    const n = laterne.getNormalVectors(v);
    laterne.logVector(n[0]);
    laterne.logVector(n[1]);
    assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "getVectorOfLength", function( assert ) {  
    const v = {};
    v.c = [];
    v.c[0] = 4;
    v.c[1] = 3;
    const v2 = laterne.getVectorOfLength(v, 10);
    assert.equal(v2.c[0], 8);
    assert.equal(v2.c[1], 6);
});

QUnit.test( "getRectPoints", function( assert ) {  
    const p1 = {x:1, y:2};
    const p2 = {x:4, y:2};
    const width = 1;
    const rect = laterne.getRectPoints(p1, p2, width);
    assert.equal(rect[0].x, 1);
    assert.equal(rect[0].y, 3);
    assert.equal(rect[1].x, 4);
    assert.equal(rect[1].y, 3);
    assert.equal(rect[2].x, 4);
    assert.equal(rect[2].y, 1);
    assert.equal(rect[3].x, 1);
    assert.equal(rect[3].y, 1);
});