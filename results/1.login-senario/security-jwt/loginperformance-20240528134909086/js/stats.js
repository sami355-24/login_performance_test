var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "21780",
        "ok": "21759",
        "ko": "21"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "90"
    },
    "maxResponseTime": {
        "total": "4008",
        "ok": "4008",
        "ko": "107"
    },
    "meanResponseTime": {
        "total": "135",
        "ok": "135",
        "ko": "101"
    },
    "standardDeviation": {
        "total": "413",
        "ok": "413",
        "ko": "5"
    },
    "percentiles1": {
        "total": "31",
        "ok": "31",
        "ko": "101"
    },
    "percentiles2": {
        "total": "86",
        "ok": "86",
        "ko": "106"
    },
    "percentiles3": {
        "total": "511",
        "ok": "513",
        "ko": "106"
    },
    "percentiles4": {
        "total": "3004",
        "ok": "3004",
        "ko": "107"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 20825,
    "percentage": 96
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 544,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 390,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 21,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "660",
        "ok": "659.364",
        "ko": "0.636"
    }
},
contents: {
"req_1-a-----------646396859": {
        type: "REQUEST",
        name: "1-a. 로그인",
path: "1-a. 로그인",
pathFormatted: "req_1-a-----------646396859",
stats: {
    "name": "1-a. 로그인",
    "numberOfRequests": {
        "total": "21780",
        "ok": "21759",
        "ko": "21"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "90"
    },
    "maxResponseTime": {
        "total": "4008",
        "ok": "4008",
        "ko": "107"
    },
    "meanResponseTime": {
        "total": "135",
        "ok": "135",
        "ko": "101"
    },
    "standardDeviation": {
        "total": "413",
        "ok": "413",
        "ko": "5"
    },
    "percentiles1": {
        "total": "31",
        "ok": "31",
        "ko": "101"
    },
    "percentiles2": {
        "total": "86",
        "ok": "86",
        "ko": "106"
    },
    "percentiles3": {
        "total": "511",
        "ok": "513",
        "ko": "106"
    },
    "percentiles4": {
        "total": "3004",
        "ok": "3004",
        "ko": "107"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 20825,
    "percentage": 96
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 544,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 390,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 21,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "660",
        "ok": "659.364",
        "ko": "0.636"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
