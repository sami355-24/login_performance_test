var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "325",
        "ok": "325",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "38223",
        "ok": "38223",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "15928",
        "ok": "15928",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13409",
        "ok": "13409",
        "ko": "-"
    },
    "percentiles1": {
        "total": "14970",
        "ok": "14970",
        "ko": "-"
    },
    "percentiles2": {
        "total": "30038",
        "ok": "30038",
        "ko": "-"
    },
    "percentiles3": {
        "total": "35303",
        "ok": "35303",
        "ko": "-"
    },
    "percentiles4": {
        "total": "37294",
        "ok": "37294",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 91,
    "percentage": 28
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 231,
    "percentage": 71
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.603",
        "ok": "5.603",
        "ko": "-"
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
        "total": "325",
        "ok": "325",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "38223",
        "ok": "38223",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "15928",
        "ok": "15928",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13409",
        "ok": "13409",
        "ko": "-"
    },
    "percentiles1": {
        "total": "14970",
        "ok": "14970",
        "ko": "-"
    },
    "percentiles2": {
        "total": "30038",
        "ok": "30038",
        "ko": "-"
    },
    "percentiles3": {
        "total": "35303",
        "ok": "35303",
        "ko": "-"
    },
    "percentiles4": {
        "total": "37294",
        "ok": "37294",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 91,
    "percentage": 28
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 231,
    "percentage": 71
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.603",
        "ok": "5.603",
        "ko": "-"
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
