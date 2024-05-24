var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "43530",
        "ok": "17971",
        "ko": "25559"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "28037",
        "ok": "28037",
        "ko": "22562"
    },
    "meanResponseTime": {
        "total": "3674",
        "ok": "4462",
        "ko": "3119"
    },
    "standardDeviation": {
        "total": "4318",
        "ok": "3963",
        "ko": "4468"
    },
    "percentiles1": {
        "total": "1963",
        "ok": "2387",
        "ko": "4"
    },
    "percentiles2": {
        "total": "6609",
        "ok": "7184",
        "ko": "6156"
    },
    "percentiles3": {
        "total": "12356",
        "ok": "12817",
        "ko": "11988"
    },
    "percentiles4": {
        "total": "14668",
        "ok": "14976",
        "ko": "14473"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 784,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 171,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 17016,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 25559,
    "percentage": 59
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1012.326",
        "ok": "417.93",
        "ko": "594.395"
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
        "total": "43530",
        "ok": "17971",
        "ko": "25559"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "28037",
        "ok": "28037",
        "ko": "22562"
    },
    "meanResponseTime": {
        "total": "3674",
        "ok": "4462",
        "ko": "3119"
    },
    "standardDeviation": {
        "total": "4318",
        "ok": "3963",
        "ko": "4468"
    },
    "percentiles1": {
        "total": "1963",
        "ok": "2386",
        "ko": "4"
    },
    "percentiles2": {
        "total": "6609",
        "ok": "7184",
        "ko": "6169"
    },
    "percentiles3": {
        "total": "12356",
        "ok": "12817",
        "ko": "11988"
    },
    "percentiles4": {
        "total": "14668",
        "ok": "14976",
        "ko": "14474"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 784,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 171,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 17016,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 25559,
    "percentage": 59
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1012.326",
        "ok": "417.93",
        "ko": "594.395"
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
