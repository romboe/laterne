let laterne = {};

laterne.getVector = (p1, p2) => {
    let v = {};
    v.c = [];
    v.c[0] = p2.x - p1.x;
    v.c[1] = p2.y - p1.y;
    if (typeof p2.z !== 'undefined') {
        v.c[2] = p2.z - p1.z;
    }
    return v;
};

laterne.logVector = (v) => {
    let str = '';
    for (let i=0; i<v.c.length; i++) {
        if (str.length > 0) {
            str += ', '
        }
        str += v.c[i];
    }
    let ret = '(' + str + ')';
    console.log(ret);
}

laterne.logPoints = (ps) => {
    let str = '';
    for (let i=0; i<ps.length; i++) {
        if (str.length > 0) {
            str += ', '
        }
        str += '(' + ps[i].x + ',' + ps[i].y +')';
    }
    let ret = str;
    console.log(ret);
}

laterne.getRectPoints = (p1, p2, width) => {
    let ret = [];
    const v = laterne.getVector(p1, p2);
    const normals = laterne.getNormalVectors(v);
    const n1 = laterne.getVectorOfLength(normals[0], width);
    const n2 = laterne.getVectorOfLength(normals[1], width);
    ret[0] = laterne.getPoint(p1, n1);
    ret[1] = laterne.getPoint(p2, n1);
    ret[2] = laterne.getPoint(p2, n2);
    ret[3] = laterne.getPoint(p1, n2);
    return ret;
}

laterne.getVectorOfLength = (v, length) => {
    let v2 = laterne.normalize(v);
    v2.c[0] = v2.c[0]*length;
    v2.c[1] = v2.c[1]*length;
    return v2;
}

laterne.normalize = (v) => {
    let ret = {};
    ret.c = [];
    ret.c[0] = v.c[0] / laterne.getVectorLength(v);
    ret.c[1] = v.c[1] / laterne.getVectorLength(v);
    return ret;
}

laterne.getVectorLength = (v) => {
    let sum = 0;
    v.c.map(x => {
        sum += Math.pow(x, 2);
    });
    return Math.pow(sum, 0.5); // Wurzel aus 2
}

laterne.getNormalVectors = (v) => {
    let n1 = {};
    n1.c = [];
    n1.c[0] = -v.c[1];
    n1.c[1] = v.c[0];

    let n2 = {};
    n2.c = [];
    n2.c[0] = v.c[1];
    n2.c[1] = -v.c[0];

    return [n1, n2];
}

laterne.getPoint = (p, v) => {
    let ret = {};
    ret.x = p.x + v.c[0];
    ret.y = p.y + v.c[1];
    return ret;
}

laterne.getIntegerPoints = (ps) => {
    let ret = [];
    ps.map(p => {
        ret.push(laterne.getIntegerPoint(p));
    });
    return ret;
}

laterne.getIntegerPoint = (p) => {
    let ret = {};
    ret.x = Math.trunc(p.x);
    ret.y = Math.trunc(p.y);
    return ret;
}