const tag = "[services/g6Admin/innerCheck.js_v0.13]"; 
const rSQL = require('../../sql/SQL.js'); 
const config = require('../../config');

const l = require('../../logger');
l.tag(tag);   

exports.innerCheck = async function(reqInf,resolve,Service)
{         
    return _old_innerCheck(reqInf,resolve,Service);
}
var _old_innerCheck = async function(reqInf,resolve,Service)
{         
    var s = ""; 
    var a = reqInf;
    var n = 0;
    var r = {};
	if (config.PRODUCTION) {
		r.token = "...";
		r.msg = "Not available in production deployment"
		resolve(Service.successResponse(r));
	}
    r.ls = [];
    for(i in a){
        var sql = a[i].sql;
        s+=sql+";";
        n++;
        r.ls.push(sql);
      //  rSQL._2RunSQL(sql);
    } 
    await rSQL._2RunSQLList(r.ls);
    
    r.code = -1;
    r.n = n;
    r.Date = Date();
    r.s = s;
    resolve(Service.successResponse(r));   
    return 0;
}
