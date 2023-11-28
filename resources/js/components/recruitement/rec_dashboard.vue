<template>
    <div
>
        <div class="app-content content ">
            <div class="content-overlay"></div>
            <div class="header-navbar-shadow"></div>
            <div class="content-wrapper container-xxl p-0">
                <div class="content-header row">
                </div>
                <div class="content-body">
                    <div class="breadcrumb-wrapper">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link class="d-flex align-items-center" to="/">
                                    Home
                                </router-link>
                            </li>
                            <li class="breadcrumb-item">
                                Recruitment
                            </li>
                        </ol>
                    </div>
                    <div class="row my-4">
                        <div class="col-md-3 col-sm-6  ">
                            <div class=" custumcard card" data-bs-target="#viewposts" data-bs-toggle="modal"
                                 style="cursor:pointer;">
                                <div class="card-body">
<div class="d-flex justify-content-between">
    <h4 class="cardstext my-2">Total Posts</h4>
    <div class="cardlogo">
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
  <path d="M0.34416 0.352184C0.123795 0.577756 9.15048e-07 0.883656 9.01106e-07 1.20261C8.87164e-07 1.52157 0.123795 1.82747 0.34416 2.05305L6.16269 8.00726L0.344159 13.9615C0.130041 14.1883 0.0115608 14.4922 0.0142387 14.8076C0.0169166 15.123 0.140538 15.4247 0.358479 15.6477C0.576418 15.8707 0.871239 15.9972 1.17944 16C1.48764 16.0027 1.78457 15.8815 2.00626 15.6623L8.65584 8.85769C8.87621 8.63212 9 8.32622 9 8.00726C9 7.6883 8.87621 7.3824 8.65584 7.15683L2.00626 0.352184C1.78583 0.126681 1.4869 -3.28408e-07 1.17521 -3.42032e-07C0.863521 -3.55657e-07 0.564591 0.126681 0.34416 0.352184Z" fill="#232323"/>
</svg>
    </div>
  
</div>

                                        <h2 class="cardsamount my-2 " v-if="postsct<10 && postsct!=0">0{{ postsct }}</h2>
                                        <h2 class="fw-bolder cardsamount " v-else>{{ postsct }}</h2>


                                        <h2 class="cardsfooter " >Interviews</h2>


                                   
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 ">
                            <div class="custumcard card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
    <h4 class="cardstext my-2">Total Applications</h4>
    <div class="cardlogo">
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
  <path d="M0.34416 0.352184C0.123795 0.577756 9.15048e-07 0.883656 9.01106e-07 1.20261C8.87164e-07 1.52157 0.123795 1.82747 0.34416 2.05305L6.16269 8.00726L0.344159 13.9615C0.130041 14.1883 0.0115608 14.4922 0.0142387 14.8076C0.0169166 15.123 0.140538 15.4247 0.358479 15.6477C0.576418 15.8707 0.871239 15.9972 1.17944 16C1.48764 16.0027 1.78457 15.8815 2.00626 15.6623L8.65584 8.85769C8.87621 8.63212 9 8.32622 9 8.00726C9 7.6883 8.87621 7.3824 8.65584 7.15683L2.00626 0.352184C1.78583 0.126681 1.4869 -3.28408e-07 1.17521 -3.42032e-07C0.863521 -3.55657e-07 0.564591 0.126681 0.34416 0.352184Z" fill="#232323"/>
</svg>
    </div>
  
</div>
<h2 class="cardsamount my-2 " v-if="candsct<10 && candsct!=0">0{{ candsct }}</h2>

<h2 class="fw-bolder cardsamount my-2" v-else>{{ candsct}}</h2>



                                        <h2 class="cardsfooter " >Applications</h2>
                                    
                                
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 ">
                            <div class="custumcard card">
                               
                                <div class="card-body">
<div class="d-flex justify-content-between">

    <h4 class="cardstext my-2">Total Interviews</h4>

    <div class="cardlogo">

        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
  <path d="M0.34416 0.352184C0.123795 0.577756 9.15048e-07 0.883656 9.01106e-07 1.20261C8.87164e-07 1.52157 0.123795 1.82747 0.34416 2.05305L6.16269 8.00726L0.344159 13.9615C0.130041 14.1883 0.0115608 14.4922 0.0142387 14.8076C0.0169166 15.123 0.140538 15.4247 0.358479 15.6477C0.576418 15.8707 0.871239 15.9972 1.17944 16C1.48764 16.0027 1.78457 15.8815 2.00626 15.6623L8.65584 8.85769C8.87621 8.63212 9 8.32622 9 8.00726C9 7.6883 8.87621 7.3824 8.65584 7.15683L2.00626 0.352184C1.78583 0.126681 1.4869 -3.28408e-07 1.17521 -3.42032e-07C0.863521 -3.55657e-07 0.564591 0.126681 0.34416 0.352184Z" fill="#232323"/>
</svg>
    </div>
  
</div>

                                        
                                        <h2 class="fw-bolder cardsamount my-2" v-if="ct_ong_int<10 && ct_ong_int!=0">
                                            0{{ ct_ong_int }}</h2>
                                        <h2 class="fw-bolder cardsamount my-2" v-else>{{ ct_ong_int }}</h2>


                                        <h2 class="cardsfooter " >Ongoing interviews</h2>


                                   
                                </div>
                            </div>
                                   
                               
                        </div>
                        <div class="col-md-3  col-sm-6 ">
                            <div class="custumcard card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">

<h4 class="cardstext my-2">Total Short listed</h4>

<div class="cardlogo">

    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
<path d="M0.34416 0.352184C0.123795 0.577756 9.15048e-07 0.883656 9.01106e-07 1.20261C8.87164e-07 1.52157 0.123795 1.82747 0.34416 2.05305L6.16269 8.00726L0.344159 13.9615C0.130041 14.1883 0.0115608 14.4922 0.0142387 14.8076C0.0169166 15.123 0.140538 15.4247 0.358479 15.6477C0.576418 15.8707 0.871239 15.9972 1.17944 16C1.48764 16.0027 1.78457 15.8815 2.00626 15.6623L8.65584 8.85769C8.87621 8.63212 9 8.32622 9 8.00726C9 7.6883 8.87621 7.3824 8.65584 7.15683L2.00626 0.352184C1.78583 0.126681 1.4869 -3.28408e-07 1.17521 -3.42032e-07C0.863521 -3.55657e-07 0.564591 0.126681 0.34416 0.352184Z" fill="#232323"/>
</svg>
</div>

</div>

                                    
                                    

                                    <!-- <h2 class="fw-bolder cardsamount my-2" v-if="slcandsct<10 && slcandsct!=0">
                                            0{{ slcandsct }}</h2> -->
                                        <h2 class="fw-bolder cardsamount my-2" >{{ slcandsct }}</h2>


                                    <h2 class="cardsfooter " >Short listed</h2>
                                  
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="card">
                                <div class="card-header d-flex justify-content-between align-items-center">
                                    <h4 class="card-title">Candidates ratio</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         class="feather feather-help-circle font-medium-3 text-muted cursor-pointer">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                    </svg>
                                </div>
                                <div class="card-body p-0" style="position: relative;">
                                    <div id="goal-overview-radial-bar-chart" class="my-2" style="min-height: 236px;">
                                        <div id="apexchartsk5hzssku"
                                             class="apexcharts-canvas apexchartsk5hzssku apexcharts-theme-light"
                                             style="width: 382px; height: 205.633px;">
                                            <svg id="SvgjsSvg1730" width="382" height="205.63333333333335"
                                                 xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg"
                                                 xmlns:data="ApexChartsNS" transform="translate(0, 0)"
                                                 style="background: transparent;">
                                                <g id="SvgjsG1732" class="apexcharts-inner apexcharts-graphical"
                                                   transform="translate(68.5, -10)">

                                                    <g id="SvgjsG1736" class="apexcharts-radialbar">
                                                        <g id="SvgjsG1737">
                                                            <g id="SvgjsG1738" class="apexcharts-tracks">
                                                                <g id="SvgjsG1739"
                                                                   class="apexcharts-radialbar-track apexcharts-track"
                                                                   rel="1">
                                                                    <path id="apexcharts-radialbarTrack-0"
                                                                          d="M 77.85670731707313 184.82445114399718 A 89.28658536585367 89.28658536585367 0 1 1 167.14329268292684 184.82445114399718"
                                                                          fill="none" fill-opacity="1"
                                                                          stroke="rgba(235,233,241,0.85)"
                                                                          stroke-opacity="1" stroke-linecap="round"
                                                                          stroke-width="3.5304878048780495"
                                                                          stroke-dasharray="0"
                                                                          class="apexcharts-radialbar-area"
                                                                          data:pathOrig="M 77.85670731707313 184.82445114399718 A 89.28658536585367 89.28658536585367 0 1 1 167.14329268292684 184.82445114399718">
                                                                    </path>
                                                                </g>
                                                            </g>
                                                            <g id="SvgjsG1745">
                                                                <g id="SvgjsG1749"
                                                                   class="apexcharts-series apexcharts-radial-series"
                                                                   seriesName="seriesx1" rel="1" data:realIndex="0">
                                                                    <path id="SvgjsPath1754"
                                                                          d="M 77.85670731707313 184.82445114399718 A 89.28658536585367 89.28658536585367 0 1 1 210.6873193374061 121.46749921697622"
                                                                          fill="none" fill-opacity="0.85"
                                                                          stroke="url(#SvgjsLinearGradient1750)"
                                                                          stroke-opacity="1" stroke-linecap="round"
                                                                          stroke-width="7.060975609756099"
                                                                          stroke-dasharray="0"
                                                                          class="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                                                          data:angle="249" data:value="83" index="0"
                                                                          j="0"
                                                                          data:pathOrig="M 77.85670731707313 184.82445114399718 A 89.28658536585367 89.28658536585367 0 1 1 210.6873193374061 121.46749921697622"
                                                                          filter="url(#SvgjsFilter1782)">
                                                                    </path>
                                                                </g>
                                                                <g id="SvgjsG1747" class="apexcharts-datalabels-group"
                                                                   transform="translate(0, 0) scale(1)"
                                                                   style="opacity: 1;">
                                                                    <text id="SvgjsText1748"
                                                                          font-family="Helvetica, Arial, sans-serif"
                                                                          x="122.5" y="123.5" text-anchor="middle"
                                                                          dominant-baseline="auto" font-size="2.86rem"
                                                                          font-weight="600" fill="#5e5873"
                                                                          class="apexcharts-text apexcharts-datalabel-value"
                                                                          style="font-family: Helvetica, Arial, sans-serif;">
                                                                        {{ parseInt((ct_ong_int / candsct) * 100) }}%
                                                                    </text>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <line id="SvgjsLine1764" x1="0" y1="0" x2="245" y2="0"
                                                          stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1"
                                                          class="apexcharts-ycrosshairs"></line>
                                                    <line id="SvgjsLine1765" x1="0" y1="0" x2="245" y2="0"
                                                          stroke-dasharray="0" stroke-width="0"
                                                          class="apexcharts-ycrosshairs-hidden"></line>
                                                </g>
                                                <g id="SvgjsG1733" class="apexcharts-annotations"></g>
                                            </svg>
                                            <div class="apexcharts-legend"></div>
                                        </div>
                                    </div>
                                    <div class="row border-top text-center mx-0">
                                        <div class="col-6 border-end py-1">
                                            <p class="card-text text-muted mb-0">Total</p>
                                            <h3 class="fw-bolder mb-0">{{ candsct }}</h3>
                                        </div>
                                        <div class="col-6 py-1">
                                            <p class="card-text text-muted mb-0">In Progress</p>
                                            <h3 class="fw-bolder mb-0">{{ ct_ong_int }}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="card">
                                <div class="card-header d-flex justify-content-between align-items-center">
                                    <h4 class="card-title">Hiring ratio</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         class="feather feather-help-circle font-medium-3 text-muted cursor-pointer">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                    </svg>
                                </div>
                                <div class="card-body p-0" style="position: relative;">
                                    <div id="goal-overview-radial-bar-chart" class="my-2" style="min-height: 236px;">
                                        <div id="apexchartsk5hzssku"
                                             class="apexcharts-canvas apexchartsk5hzssku apexcharts-theme-light"
                                             style="width: 382px; height: 205.633px;">
                                            <svg id="SvgjsSvg1730" width="382" height="205.63333333333335"
                                                 xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg"
                                                 xmlns:data="ApexChartsNS" transform="translate(0, 0)"
                                                 style="background: transparent;">
                                                <g id="SvgjsG1732" class="apexcharts-inner apexcharts-graphical"
                                                   transform="translate(68.5, -10)">
                                                    <defs id="SvgjsDefs1731">
                                                        <clipPath id="gridRectMaskk5hzssku">
                                                            <rect id="SvgjsRect1734" width="251" height="217" x="-3"
                                                                  y="-1" rx="0" ry="0" opacity="1" stroke-width="0"
                                                                  stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                        </clipPath>
                                                        <clipPath id="gridRectMarkerMaskk5hzssku">
                                                            <rect id="SvgjsRect1735" width="249" height="219" x="-2"
                                                                  y="-2" rx="0" ry="0" opacity="1" stroke-width="0"
                                                                  stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                        </clipPath>
                                                        <linearGradient id="SvgjsLinearGradient1740" x1="0" y1="1"
                                                                        x2="1" y2="1">
                                                            <stop id="SvgjsStop1741" stop-opacity="1"
                                                                  stop-color="rgba(40,199,111,1)" offset="0"></stop>
                                                            <stop id="SvgjsStop1742" stop-opacity="1"
                                                                  stop-color="rgba(235,233,241,1)" offset="1"></stop>
                                                            <stop id="SvgjsStop1743" stop-opacity="1"
                                                                  stop-color="rgba(235,233,241,1)" offset="1"></stop>
                                                        </linearGradient>
                                                        <linearGradient id="SvgjsLinearGradient1750" x1="0" y1="1"
                                                                        x2="1" y2="1">
                                                            <stop id="SvgjsStop1751" stop-opacity="1"
                                                                  stop-color="rgba(40,199,111,1)" offset="0"></stop>
                                                            <stop id="SvgjsStop1752" stop-opacity="1"
                                                                  stop-color="rgba(81,229,168,1)" offset="1"></stop>
                                                            <stop id="SvgjsStop1753" stop-opacity="1"
                                                                  stop-color="rgba(81,229,168,1)" offset="1"></stop>
                                                        </linearGradient>
                                                        <filter id="SvgjsFilter1782" filterUnits="userSpaceOnUse"
                                                                width="200%" height="200%" x="-50%" y="-50%">
                                                            <feFlood id="SvgjsFeFlood1783" flood-color="#000000"
                                                                     flood-opacity="0.1" result="SvgjsFeFlood1783Out"
                                                                     in="SourceGraphic"></feFlood>
                                                            <feComposite id="SvgjsFeComposite1784"
                                                                         in="SvgjsFeFlood1783Out" in2="SourceAlpha"
                                                                         operator="in"
                                                                         result="SvgjsFeComposite1784Out"></feComposite>
                                                            <feOffset id="SvgjsFeOffset1785" dx="1" dy="1"
                                                                      result="SvgjsFeOffset1785Out"
                                                                      in="SvgjsFeComposite1784Out"></feOffset>
                                                            <feGaussianBlur id="SvgjsFeGaussianBlur1786"
                                                                            stdDeviation="3 "
                                                                            result="SvgjsFeGaussianBlur1786Out"
                                                                            in="SvgjsFeOffset1785Out"></feGaussianBlur>
                                                            <feMerge id="SvgjsFeMerge1787" result="SvgjsFeMerge1787Out"
                                                                     in="SourceGraphic">
                                                                <feMergeNode id="SvgjsFeMergeNode1788"
                                                                             in="SvgjsFeGaussianBlur1786Out"></feMergeNode>
                                                                <feMergeNode id="SvgjsFeMergeNode1789"
                                                                             in="[object Arguments]"></feMergeNode>
                                                            </feMerge>
                                                            <feBlend id="SvgjsFeBlend1790" in="SourceGraphic"
                                                                     in2="SvgjsFeMerge1787Out" mode="normal"
                                                                     result="SvgjsFeBlend1790Out"></feBlend>
                                                        </filter>
                                                    </defs>
                                                    <g id="SvgjsG1736" class="apexcharts-radialbar">
                                                        <g id="SvgjsG1737">
                                                            <g id="SvgjsG1738" class="apexcharts-tracks">
                                                                <g id="SvgjsG1739"
                                                                   class="apexcharts-radialbar-track apexcharts-track"
                                                                   rel="1">
                                                                    <path id="apexcharts-radialbarTrack-0"
                                                                          d="M 77.85670731707313 184.82445114399718 A 89.28658536585367 89.28658536585367 0 1 1 167.14329268292684 184.82445114399718"
                                                                          fill="none" fill-opacity="1"
                                                                          stroke="rgba(235,233,241,0.85)"
                                                                          stroke-opacity="1" stroke-linecap="round"
                                                                          stroke-width="3.5304878048780495"
                                                                          stroke-dasharray="0"
                                                                          class="apexcharts-radialbar-area"
                                                                          data:pathOrig="M 77.85670731707313 184.82445114399718 A 89.28658536585367 89.28658536585367 0 1 1 167.14329268292684 184.82445114399718"></path>
                                                                </g>
                                                            </g>
                                                            <g id="SvgjsG1745">
                                                                <g id="SvgjsG1749"
                                                                   class="apexcharts-series apexcharts-radial-series"
                                                                   seriesName="seriesx1" rel="1" data:realIndex="0">
                                                                    <path id="SvgjsPath1754"
                                                                          d="M 77.85670731707313 184.82445114399718 A 89.28658536585367 89.28658536585367 0 1 1 210.6873193374061 121.46749921697622"
                                                                          fill="none" fill-opacity="0.85"
                                                                          stroke="url(#SvgjsLinearGradient1750)"
                                                                          stroke-opacity="1" stroke-linecap="round"
                                                                          stroke-width="7.060975609756099"
                                                                          stroke-dasharray="0"
                                                                          class="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                                                          data:angle="249" data:value="83" index="0"
                                                                          j="0"
                                                                          data:pathOrig="M 77.85670731707313 184.82445114399718 A 89.28658536585367 89.28658536585367 0 1 1 210.6873193374061 121.46749921697622"
                                                                          filter="url(#SvgjsFilter1782)"></path>
                                                                </g>
                                                                <circle id="SvgjsCircle1746" r="82.52134146341464"
                                                                        cx="122.5" cy="107.5"
                                                                        class="apexcharts-radialbar-hollow"
                                                                        fill="transparent"></circle>
                                                                <g id="SvgjsG1747" class="apexcharts-datalabels-group"
                                                                   transform="translate(0, 0) scale(1)"
                                                                   style="opacity: 1;">
                                                                    <text id="SvgjsText1748"
                                                                          font-family="Helvetica, Arial, sans-serif"
                                                                          x="122.5" y="123.5" text-anchor="middle"
                                                                          dominant-baseline="auto" font-size="2.86rem"
                                                                          font-weight="600" fill="#5e5873"
                                                                          class="apexcharts-text apexcharts-datalabel-value"
                                                                          style="font-family: Helvetica, Arial, sans-serif;">
                                                                        {{ parseInt((cnd_hir / ct_ong_int) * 100) }}%
                                                                    </text>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <line id="SvgjsLine1764" x1="0" y1="0" x2="245" y2="0"
                                                          stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1"
                                                          class="apexcharts-ycrosshairs"></line>
                                                    <line id="SvgjsLine1765" x1="0" y1="0" x2="245" y2="0"
                                                          stroke-dasharray="0" stroke-width="0"
                                                          class="apexcharts-ycrosshairs-hidden"></line>
                                                </g>
                                                <g id="SvgjsG1733" class="apexcharts-annotations"></g>
                                            </svg>
                                            <div class="apexcharts-legend"></div>
                                        </div>
                                    </div>
                                    <div class="row border-top text-center mx-0">
                                        <div class="col-6 border-end py-1">
                                            <p class="card-text text-muted mb-0">Total</p>
                                            <h3 class="fw-bolder mb-0">{{ ct_ong_int }}</h3>
                                        </div>
                                        <div class="col-6 py-1">
                                            <p class="card-text text-muted mb-0">Hired</p>
                                            <h3 class="fw-bolder mb-0">{{ cnd_hir }}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Hired candidate Card -->
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="card card-employee-task">
                                <div class="card-header">
                                    <h4 class="card-title">Hired this month</h4>
                                </div>
                                <div class="card-body" style="height:308px; overflow:auto;">
                                    <div class="employee-task d-flex justify-content-between align-items-center"
                                         v-for="mnth_hir1 in mnth_hir" data-bs-target="#viewhiredcandidate"
                                         data-bs-toggle="modal" style="cursor:pointer;">
                                        <div class="d-flex flex-row">
                                            <div class="avatar me-75" style="height:max-content">
                                                <img src="public/app-assets/images/portrait/small/avatar-s-16.jpg"
                                                     class="rounded" width="42" height="42" alt="Avatar"/>
                                            </div>
                                            <div class="my-auto">
                                                <h6 class="mb-0">{{ mnth_hir1.CandName }}</h6>
                                                <small>{{ mnth_hir1.PostTitle }}</small>
                                            </div>
                                        </div>
                                        <div class="d-flex" style="float: right; max-width: 25%; ">
                                            <small class="text-muted me-75"
                                                   style=" font-size:11px; ">{{ mnth_hir1.updatedOn }}</small>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                        <!--/ Hired candidate Card -->
                        <!--  hired candidate  -->
                        <div class="modal fade" id="viewhiredcandidate" tabindex="-1" aria-labelledby="addNewCardTitle"
                             aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header bg-transparent">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body px-sm-5 mx-50 pb-5">
                                        <!-- User Card -->

                                        <div class="user-avatar-section">
                                            <div class="d-flex align-items-center flex-column">
                                                <img class="img-fluid rounded mt-3 mb-2"
                                                     src="public/app-assets/images/portrait/small/avatar-s-2.jpg"
                                                     height="110" width="110" alt="User avatar"/>
                                                <div class="user-info text-center">
                                                    <h4>Gertrude Barton</h4>
                                                    <span class="badge bg-light-secondary">Author</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-around my-2 pt-75">
                                            <div class="d-flex align-items-start me-2">
                                                <span class="badge bg-light-primary p-75 rounded">
                                                    <i data-feather="check" class="font-medium-2"></i>
                                                </span>
                                                <div class="ms-75">
                                                    <h4 class="mb-0">1.23k</h4>
                                                    <small>Tasks Done</small>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-start">
                                                <span class="badge bg-light-primary p-75 rounded">
                                                    <i data-feather="briefcase" class="font-medium-2"></i>
                                                </span>
                                                <div class="ms-75">
                                                    <h4 class="mb-0">568</h4>
                                                    <small>Projects Done</small>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 class="fw-bolder border-bottom pb-50 mb-1">Details</h4>
                                        <div class="info-container">
                                            <ul class="list-unstyled">
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Username:</span>
                                                    <span>violet.dev</span>
                                                </li>
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Billing Email:</span>
                                                    <span>vafgot@vultukir.org</span>
                                                </li>
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Status:</span>
                                                    <span class="badge bg-light-success">Active</span>
                                                </li>
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Role:</span>
                                                    <span>Author</span>
                                                </li>
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Tax ID:</span>
                                                    <span>Tax-8965</span>
                                                </li>
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Contact:</span>
                                                    <span>+1 (609) 933-44-22</span>
                                                </li>
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Language:</span>
                                                    <span>English</span>
                                                </li>
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Country:</span>
                                                    <span>Wake Island</span>
                                                </li>
                                            </ul>
                                            <div class="d-flex justify-content-center pt-2">
                                                <a href="javascript:;" class="btn btn-primary me-1"
                                                   data-bs-target="#editUser" data-bs-toggle="modal">
                                                    Edit
                                                </a>
                                                <a href="javascript:;" class="btn btn-outline-danger suspend-user">Suspended</a>
                                            </div>
                                        </div>

                                        <!-- /User Card -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--/  hired candidate  -->
                    </div>
                    <div class="col-md-12">
                        <div clas="card" style="background-color:white !important">
                            <div class="table-responsive" style="overflow-x: initial !important;">
                                <table class="table mb-0">
                                    <thead>
                                    <tr>
                                        <th style="width: 34%; text-align: center; white-space: nowrap;">Post name</th>
                                        <th style="width: 21%; text-align: center; white-space: nowrap;">Applications
                                            received
                                        </th>
                                        <th style="width: 0px; text-align: center; white-space: nowrap;"></th>
                                        <th style="width: auto; text-align: center; white-space: nowrap;">Ongoing
                                            interviews
                                        </th>
                                        <th style="width: auto; text-align: center; white-space: nowrap;">Offered</th>
                                    </tr>
                                    </thead>
                                </table>
                                <div class="table-responsive" style="max-height:300px ;overflow-y:auto;">
                                    <table class="table mb-0">
                                        <tbody>
                                        <tr v-for="jobs1 in jobs" style="height: 1em; overflow: hidden;">
                                            <td style="width:26%; vertical-align: middle; white-space:nowrap;"
                                                colspan="2">
                                                <h6 class="mb-0">{{ jobs1.PostTitle }}</h6>
                                            </td>
                                            <td style="font-size:0px; overflow: hidden; width: 0px; max-height:10px">
                                                <span v-for="candidates1 in candidates"
                                                      v-if="candidates1.JobID==jobs1.JobID">{{ a = a + 1 }}</span>
                                            </td>
                                            <td style="vertical-align: middle; text-align: center; white-space: nowrap;">
                                                <span class="badge rounded-pill badge-light-primary me-1">{{ a }}</span>
                                            </td>
                                            <td style="font-size: 0px; overflow: hidden; width: 0px; max-height: 10px">
                                                <span v-for="interview1 in interview"
                                                      v-if="interview1.JobID==jobs1.JobID && interview1.hire_sts!='1'">{{ b = b + 1 }}</span>
                                            </td>
                                            <td style="width: 26%; vertical-align: middle; text-align: center; white-space: nowrap;">
                                                <span class="badge rounded-pill badge-light-primary me-1">{{ b }}</span>
                                            </td>
                                            <td style="text-align: center; visibility: hidden; overflow: hidden; width: 13%;">
                                                <span class="badge badge-light-danger">{{ a = 0 }}{{ b = 0 }}</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Activities Performed</h4>
                            </div>
                            <div class="card-body" style="height: 500px; overflow: scroll;">
                                <ul class="timeline" v-for="recs1 in recs">
                                    <li class="timeline-item" style="border-left-color: #c1c1c180 !important ">
                                        <span class="timeline-point timeline-point-success timeline-point-indicator"
                                              v-if="recs1.EventStatus=='Interview scheduled' || recs1.EventStatus=='Candidate added'"></span>
                                        <span class="timeline-point timeline-point-success"
                                              v-else-if="recs1.EventStatus=='Candidate shortlisted'">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 class="feather feather-user"><path
                                                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12"
                                                                                                             cy="7"
                                                                                                             r="4"></circle></svg>
                                        </span>
                                        <span class="timeline-point timeline-point-success"
                                              v-else-if="recs1.EventStatus=='Candidate hired'">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                                                 class="bi bi-person-check-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                      d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                                <path
                                                    d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            </svg>
                                        </span>
                                        <span class="timeline-point timeline-point-warning timeline-point-indicator"
                                              v-else></span>
                                        <div class="timeline-event">
                                            <div
                                                class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                                <h6 class="mb-50">{{ recs1.EventStatus }}</h6>
                                                <span class="timeline-event-time">{{ recs1.ActivityTime }}</span>
                                            </div>
                                            <p>{{ recs1.Description }}</p>
                                            <hr/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- view posts modal -->
                <div class="modal fade" id="viewposts" tabindex="-1" aria-labelledby="pricingModalTitle"
                     aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-xl">
                        <div class="modal-content">
                            <div class="modal-header bg-transparent">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div class="modal-body px-sm-5 mx-50 pb-5">
                                <div id="pricing-plan">
                                    <div class="row">
                                        <div class="col-xl-4 col-lg-6 col-md-6" v-for="jobs3 in jobs">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between">
                                                        <span><span v-if="jobs3.JobNumber<2">Only</span><span v-else>Total</span> {{ jobs3.JobNumber }} <span
                                                            v-if="jobs3.JobNumber<2">vacancy</span><span v-else>vacancies</span></span>
                                                        <ul class="list-unstyled d-flex align-items-center avatar-group mb-0">
                                                            <li class="avatar avatar-sm pull-up"
                                                                v-for="candidates3 in candidates"
                                                                v-if="candidates3.JobID==jobs3.JobID">
                                                                <img class="rounded-circle"
                                                                     src="public/app-assets/images/avatars/2.png"
                                                                     alt="Avatar"/>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div
                                                        class="d-flex justify-content-between align-items-end mt-1 pt-25">
                                                        <div class="role-heading">
                                                            <h4 class="fw-bolder">{{ jobs3.PostTitle }}</h4>
                                                        </div>
                                                    </div>

                                                    <small class="fw-bolder" style="color: #b9b9c3">
                                                        <cite title="View applications"> Last date to apply is: <label>{{ jobs3.EndDate }}</label></cite>
                                                    </small>
                                                    <small class="fw-bolder" style="float:right;">
                                                        <router-link class="align-items-center" style="color:dimgray"
                                                                     to="">
                                                            <i data-feather='edit' style="width: 25px;"></i>
                                                        </router-link>

                                                        <router-link class="align-items-center" style="color:dimgray"
                                                                     to="">
                                                            <i data-feather='trash' style="width: 20px;"></i>
                                                        </router-link>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/ view posts modal -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            a: 1,
            b: 1,
            c: 1,
            value: 0,
            postsct: '',
            candsct: '',
            slcandsct: '',
            ct_ong_int: '',
            top_counters: {},

            count: 1,
            mnth_hir: {},
            candidates: {},
            recs: {},
            jobs: {},
            cnd_hir: '',
            rel_int_ct: '',
            interview: {},
        }
    },
    methods: {
     
    },
    mounted() {

        axios.get('top_counters') //Count top list of dashboard
            .then(data => {
                this.top_counters = data.data;
                this.postsct = this.top_counters.jobs_count;
                this.candsct = this.top_counters.applications;
                this.ct_ong_int = this.top_counters.ongoing_interview;
                this.slcandsct = this.top_counters.short_listed;
            })
            .catch(error => {
            });

        axios.get('job_detail2')  //Get all posts
            .then(data => this.jobs = data.data)
            .catch(error => {
            });

        axios.get('rel_cand_count') //Count relevent job interviews
            .then(data => this.interview = data.data)
            .catch(error => {
            });

        axios.get('mnth_hired')  //Get hired candidates of last 30 days
            .then(data => this.mnth_hir = data.data)
            .catch(error => {
            });

        axios.get('cnd_hired')  //Count hired candidates
            .then(data => this.cnd_hir = data.data)
            .catch(error => {
            });

        axios.get('rec_activities')  //Recruitment activities
            .then(data => this.recs = data.data)
            .catch(error => {
            });

        axios.get('candidate_detail2') // Get all candidates
            .then(data => this.candidates = data.data)
            .catch(error => {
            });

    }
}
</script>
<style>
.custumcard{
    width: 249px;
height: 139px;
flex-shrink: 0;
border-radius: 20px;
border: 10px;
border-color: black;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
}

.cardstext{
    color: #343434;
    font-family: 'Poppins',sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.16px;
}
.cardsamount{
    color: #232323;
    font-family: 'Poppins',sans-serif;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.28px;
}
.cardsfooter{
    color: #949494;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.14px;
}
.cardlogo{
    width: 16px;
height: 9px;
/* transform: rotate(90deg); */
flex-shrink: 0;
}

</style>






