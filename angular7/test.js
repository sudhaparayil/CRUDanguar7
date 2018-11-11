<body class="home">
  <div class="container-fluid display-table">
    <div class="row display-table-row">
      <div class="col-md-1 col-xs-12 display-table-cell v-align box" id="navigation">
        <!-- sidebar-->
        <admin-sidebar></admin-sidebar>
        <!-- end sidebar-->
      </div>
      <div class="col-md-12 col-xs-12">
        <!--<button type="button" class="slide-toggle">Slide Toggle</button> -->
        <!-- topbar-->
        <admin-topbar></admin-topbar>
        <!-- end topbar-->

        <div class="user-dashboard">
          <h2>RULES</h2>
          <ul class="breadcrumb">
            <li>
              <a routerLink="/admin-dashboard">SMART SCHOOL</a>
            </li>

            <li>RULES</li>
          </ul>
          <div class="row">
            <!-----------------------------------------------------------------table-------------------------------------->

            <!-- <p>You selected: {{selected}} </p> -->
            <div class="col-md-12">
              <div class="row">
                <!-- <div class="col-md-12 preloader2" *ngIf="showSpinner" >
            <div class=""  >
                <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="50%" height="59px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
              <animateTransform attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"/>
              </path>
            </svg>
        </div>
        </div> -->
        <div class="row">
            <div class="col-md-6">
              <div class="example-header">
                <mat-form-field>
                  <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
                </mat-form-field>
              </div>
            </div>
          </div>
                <div class="col-md-12 optionz">
                  
                </div>

                <!--    
              <div class="example-header" >
                  <mat-form-field>
                    <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
                  </mat-form-field>
              </div> -->
                <div class="example-container mat-elevation-z8 ">
                  <mat-table [dataSource]="dataSource" matSort>
                    <!-- Name Column -->
                    <ng-container matColumnDef="slno">
                      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>
                      <mat-cell *matCellDef="let row;let i = index"> {{(paginator.pageIndex * paginator.pageSize) + (i+1)}} </mat-cell>
                    </ng-container>
                    <!-- Name Column -->
                    <ng-container matColumnDef="title">
                      <mat-header-cell *matHeaderCellDef mat-sort-header>Title</mat-header-cell>
                      <mat-cell *matCellDef="let row"> {{row.rule_title}} </mat-cell>
                    </ng-container>
                    <!-- Name Column -->
                    <ng-container matColumnDef="location">
                      <mat-header-cell *matHeaderCellDef mat-sort-header>Location</mat-header-cell>
                      <mat-cell *matCellDef="let row"> {{row.tbl_sensor.sensor_name}} </mat-cell>
                    </ng-container>
                    <ng-container matColumnDef="action">
                      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>
                      <mat-cell *matCellDef="let row">
                        <!-- <button mat-icon-button [matMenuTriggerFor]="menu">
                <mat-icon>more_vert</mat-icon>
              </button> -->
                        <!-- <mat-menu #menu="matMenu"> -->
                        <button (click)="getId(row.id)" data-toggle="modal" data-target="#deleteModal">
                          <i class="material-icons">delete</i>
                          <!-- <span>Delete</span> -->
                        </button>
                        <button (click)="getEditId(row.id)" data-toggle="modal" data-target="#editModal">
                          <i class="material-icons">mode_edit</i>
                          <!-- <span>Edit</span> -->
                        </button>

                        <!-- </mat-menu> -->
                      </mat-cell>
                    </ng-container>
                    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
                    <mat-row *matRowDef="let row; columns: displayedColumns;">
                    </mat-row>
                  </mat-table>
                  <div class="col-md-15 ">
                    <!-- <div *ngIf="showSpinner" class="deletespinner">
              <mat-spinner></mat-spinner>
             </div> -->
                  </div>
                  <div class="col-md-12 noItemFound" *ngIf="notExist">
                    <div class="col-md-4 col-md-offset-4">
                      <mat-toolbar class="back-color">No item found!</mat-toolbar>
                    </div>
                  </div>
                  <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>
                </div>

              </div>
            </div>
            <div class="add-button">
              <button type="button" class="add-project" data-toggle="modal" (click)="addNewRule()" data-target="#addModal" data-backdrop="static">+</button>
            </div>
            <!-- --------------------------------------------- delete modal ----------------------------------------------------------------- -->
            <div id="deleteModal" class="modal fade" role="dialog">
              <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Delete </h4>
                  </div>
                  <!-- <div class="modal-header"> -->
                  <!-- <h4 class="modal-title">Are you sure to delete?</h4> -->
                  <!-- </div> -->
                  <div class="modal-body delete-popup">
                    <i class="fa fa-exclamation"></i>

                    <h4 class="textalign">Are you sure to delete?</h4>
                  </div>
                  <div class="modal-footer">
                    <button type="button" (click)="deleteRule(id)" class="btn round-button" data-dismiss="modal">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <!-----------------------------------------------------------------delete modal-------------------------------------->
            <!-----------------------------------------------------------------add modal-------------------------------------->
            <div id="addModal" class="modal fade">
              <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" #closeBtn>&times;</button>
                    <h4 class="modal-title">Add Rule</h4>
                  </div>
                  <div class="modal-body">
                    <form role="form" id="frmAddRule" #frmAddRule="ngForm" (ngSubmit)="addRule(newRule,frmAddRule);" novalidate>
                      <div class="col-md-11">
                        <div class="form-group">
                          <div class="col-md-4 ">
                            <label class="modal-lft-lbl">Rule Title:</label>
                          </div>
                          <div class="example-container">
                            <mat-form-field>
                              <input matInput name="rule_title" [(ngModel)]="newRule.rule_title" required>
                            </mat-form-field>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="col-md-4 ">
                            <label class="modal-lft-lbl">Restricted For:</label>
                          </div>
                          <div class="example-container">
                            <mat-form-field>
                              <mat-select name="rule_for" [(ngModel)]="newRule.rule_for" required>
                                <mat-option value="all">All</mat-option>
                                <mat-option value="student">Student</mat-option>
                                <mat-option value="faculty">Faculty</mat-option>
                              </mat-select>
                            </mat-form-field>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="col-md-4 ">
                            <label class="modal-lft-lbl">Location:</label>
                          </div>
                          <div class="example-container">
                            <mat-form-field>
                              <mat-select name="s_id" [(ngModel)]="newRule.s_id" required>
                                <mat-option *ngFor="let item of sensors;" [value]="item.id">{{item.sensor_name}}</mat-option>
                              </mat-select>
                            </mat-form-field>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="col-md-4 ">
                            <label class="modal-lft-lbl">Rule Type:</label>
                          </div>
                          <div class="example-container">
                            <mat-form-field>
                              <mat-select name="type" [(ngModel)]="newRule.type" required>
                                <mat-option value="Never">Never</mat-option>
                                <mat-option value="Periodical">Periodical</mat-option>
                              </mat-select>
                            </mat-form-field>
                          </div>
                        </div>
                        <div class="form-group" *ngIf="newRule.type =='Periodical'">
                          <div *ngFor="let item of newRule.time; let i = index; trackBy:trackByIndex">
                            <div class="col-md-4 ">
                              <label class="modal-lft-lbl">Restricted Time(HH:MM)(24hr):</label>
                            </div>
                            <div class="example-container">
                              <div class="col-md-12 ">
                                <div class="col-md-2">
                                  From:
                                </div>
                                <div class="col-md-3">
                                  <ngb-timepicker name="time{{i}}" [(ngModel)]="newRule.time[i].from" required></ngb-timepicker>
                                </div>
                                <div class="col-md-2">
                                  To:
                                </div>
                                <div class="col-md-3">
                                  <ngb-timepicker name="time{{i}}" [(ngModel)]="newRule.time[i].to" required></ngb-timepicker>
                                </div>
                                <div class="col-md-2">
                                  <button mat-button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="value=''" class="add-project">
                                    <mat-icon>close</mat-icon>
                                  </button>
                                  <input type="button" value="X" (click)="closetime(i)" class="add-project zeromargin">
                                </div>
                              </div>
                            </div>

                          </div>
                          <div class="pull-right">
                            <input type="button" value="Add More" (click)="addMore()" class="addmore1 round-button btn padd-bt">

                          </div>
                        </div>
                        <br>
                        <div class="row">
                          <div class="col-md-4">
                            <button type="submit" [disabled]="btnDisbled" class="btn round-button">Submit</button>
                          </div>
                          <!-- <div class="col-md-8" *ngIf="showSpinner">
                          <svg class="svgclass" version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;"
                            xml:space="preserve">
                            <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                              <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"
                              />
                            </path>
                          </svg>
                        </div> -->
                        </div>

                      </div>

                    </form>
                  </div>
                  <div class="modal-footer">
                  </div>
                </div>
              </div>
            </div>
            <!----------------------------------------addModal------------------------------>
            <!-----------------------------------------------------------------edit modal-------------------------------------->
            <div id="editModal" class="modal fade">
              <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" #closeBtn1>&times;</button>
                    <h4 class="modal-title">Edit Rule</h4>
                  </div>
                  <div class="modal-body">
                    <form role="form" #f="ngForm" (ngSubmit)="updateRule(rule);" novalidate>
                      <div class="col-md-11">
                        <div class="form-group">
                          <div class="col-md-4 ">
                            <label class="modal-lft-lbl">Rule Title:</label>
                          </div>
                          <div class="example-container">
                            <mat-form-field>
                              <input matInput name="rule_title" [(ngModel)]="rule.rule_title" required>
                            </mat-form-field>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="col-md-4 ">
                            <label class="modal-lft-lbl">Rule For:</label>
                          </div>
                          <div class="example-container">
                            <mat-form-field>
                              <mat-select name="rule_for" [(ngModel)]="rule.restricted_for" required>
                                <mat-option value="all">All</mat-option>
                                <mat-option value="student">Student</mat-option>
                                <mat-option value="faculty">Faculty</mat-option>
                              </mat-select>
                            </mat-form-field>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="col-md-4 ">
                            <label class="modal-lft-lbl">Location:</label>
                          </div>
                          <div class="example-container">
                            <mat-form-field>
                              <mat-select name="s_id" [(ngModel)]="rule.s_id" required>
                                <mat-option *ngFor="let item of sensors;" [value]="item.id">{{item.sensor_name}}</mat-option>
                              </mat-select>
                            </mat-form-field>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="col-md-4 ">
                            <label class="modal-lft-lbl">Rule Type:</label>
                          </div>
                          <div class="example-container">
                            <mat-form-field>
                              <mat-select name="type" [(ngModel)]="rule.type" required>
                                <mat-option value="Never">Never</mat-option>
                                <mat-option value="Periodical">Periodical</mat-option>
                              </mat-select>
                            </mat-form-field>
                          </div>
                        </div>
                        <div class="form-group" *ngIf="rule.type =='Periodical'">
                          <div *ngFor="let item of rule.time; let i = index; trackBy:trackByIndex">
                            <div class="col-md-4 ">
                              <label class="modal-lft-lbl">Restricted Time(HH:MM)(24hr):</label>
                            </div>
                            <div class="example-container">
                              <div class="col-md-12 ">
                                <div class="col-md-2">
                                  From:
                                </div>
                                <div class="col-md-3">
                                  <ngb-timepicker name="time1{{i}}" [(ngModel)]="rule.time[i].from" required></ngb-timepicker>
                                </div>
                                <div class="col-md-2">
                                  To:
                                </div>
                                <div class="col-md-3">
                                  <ngb-timepicker name="time{{i}}" [(ngModel)]="rule.time[i].to" required></ngb-timepicker>
                                </div>
                                <div class="col-md-2">
                                  <button mat-button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="value=''" class="add-project">
                                    <mat-icon>close</mat-icon>
                                  </button>
                                  <input type="button" value="X" (click)="closetime1(i)" class="add-project zeromargin">
                                </div>
                              </div>
                            </div>

                          </div>
                          <div class="pull-right">
                            <input type="button" value="Add More" (click)="addMoreFromEdit()" class="addmore1 round-button btn padd-bt">

                          </div>

                        </div>
                        <br>
                        <div class="row">
                          <div class="col-md-4">
                            <button type="submit" [disabled]="btnDisbled" class="btn round-button">Submit</button>
                          </div>
                          <!-- <div class="col-md-8" *ngIf="showSpinner">
                            <svg class="svgclass" version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;"
                              xml:space="preserve">
                              <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                                <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"
                                />
                              </path>
                            </svg>
                          </div> -->
                        </div>

                      </div>

                    </form>
                  </div>
                  <div class="modal-footer">
                  </div>
                </div>
              </div>
            </div>
            <!----------------------------------------edit Modal------------------------------>
            <!-----------------------------------------------------------------end table-------------------------------------->
          </div>
          <admin-footer></admin-footer>
        </div>
      </div>
      <!-- footer-->
      
      <!-- end footer-->
    </div>
  </div>
  <!-- Modal -->
</body>