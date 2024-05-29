var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "37708",
        "ok": "36206",
        "ko": "1502"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "31182",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "6468",
        "ok": "6698",
        "ko": "927"
    },
    "standardDeviation": {
        "total": "6455",
        "ok": "6310",
        "ko": "7367"
    },
    "percentiles1": {
        "total": "3901",
        "ok": "4223",
        "ko": "0"
    },
    "percentiles2": {
        "total": "8923",
        "ok": "9082",
        "ko": "1"
    },
    "percentiles3": {
        "total": "21072",
        "ok": "21150",
        "ko": "115"
    },
    "percentiles4": {
        "total": "31017",
        "ok": "31017",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2137,
    "percentage": 6
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 451,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 33618,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1502,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "423.685",
        "ok": "406.809",
        "ko": "16.876"
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
        "total": "19605",
        "ok": "18103",
        "ko": "1502"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "31182",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "7969",
        "ok": "8553",
        "ko": "927"
    },
    "standardDeviation": {
        "total": "8138",
        "ok": "7922",
        "ko": "7367"
    },
    "percentiles1": {
        "total": "4180",
        "ok": "5036",
        "ko": "0"
    },
    "percentiles2": {
        "total": "11007",
        "ok": "11853",
        "ko": "1"
    },
    "percentiles3": {
        "total": "23243",
        "ok": "23594",
        "ko": "115"
    },
    "percentiles4": {
        "total": "31044",
        "ok": "31042",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 612,
    "percentage": 3
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 75,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 17416,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1502,
    "percentage": 8
},
    "meanNumberOfRequestsPerSecond": {
        "total": "220.281",
        "ok": "203.404",
        "ko": "16.876"
    }
}
    },"req_1-b--------------856095635": {
        type: "REQUEST",
        name: "1-b. 비즈니스 로직",
path: "1-b. 비즈니스 로직",
pathFormatted: "req_1-b--------------856095635",
stats: {
    "name": "1-b. 비즈니스 로직",
    "numberOfRequests": {
        "total": "18103",
        "ok": "18103",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10790",
        "ok": "10790",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4843",
        "ok": "4843",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3160",
        "ok": "3160",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3608",
        "ok": "3606",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8140",
        "ok": "8140",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9706",
        "ok": "9706",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9902",
        "ok": "9902",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1525,
    "percentage": 8
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 376,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 16202,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "203.404",
        "ok": "203.404",
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
