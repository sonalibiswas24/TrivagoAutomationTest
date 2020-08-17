const webdriver = require('selenium-webdriver');
const expect = require('chai').expect;
const By = require('selenium-webdriver').By;



describe('Smoke Tests', function () {


    //Test case1: Item creation

    it.only('user should be able to login',function() {
        const driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.get('https://plangrid-test.planfront.net/login');
        driver.manage().window().maximize().then(function () {
            driver.findElement(By.id('test-email')).sendKeys('sonali.jana@plangrid.com').then(function () {
                driver.findElement(By.id('test-submitLogin')).click().then(function () {
                    driver.sleep(3000).then(function () {
                        driver.findElement(By.id('test-password')).sendKeys('infy@123').then(function () {
                            driver.findElement(By.id('test-submitLogin')).click().then(function () {
                                driver.sleep(6000).then(function () {
                                    driver.findElement(By.name('project_search')).sendKeys('flow').then(function () {
                                        driver.sleep(3000).then(function () {
                                        driver.findElement(By.xpath('//a[contains(@title,\'Flow Test with and without groups\')]/span[1]/span[1]')).click().then(function () {
                                            driver.sleep(6000).then(function () {
                                            driver.findElement(By.xpath('//a[contains(@href,\'/app/projects/a99cff3e-8d90-470e-3cb0-322c7024a20b/submittals/dashboard\')]/span')).click().then(function () {
                                                driver.sleep(6000).then(function () {
                                                    driver.findElement(By.xpath('//div[contains(@class,\'flex mb2\')]/button/div/span')).click().then(function () {
                                                     driver.sleep(4000).then(function () {


                                                    driver.findElement(By.xpath('//button[contains(@data-qa,\'ItemsModal.newItemBtn\')]')).click().then(function () {
                                                        driver.findElement(By.name('name')).sendKeys('item1').then(function () {
                                                            driver.findElement(By.xpath('//button[contains(@data-qa,\'CreateItemModal.submitBtn\')]')).click().then(function () {
                                                                driver.sleep(6000).then(function () {


                                                                    //Test case2: Package creation and assigned to submitter
                                                    driver.findElement(By.xpath('//div[contains(@data-qa,\'GlobalCheckbox\')]')).click().then(function () {
                                                            driver.findElement(By.xpath('//div[contains(@class,\'flex items-center justify-between bc-smoke\')]/div[2]/button[2]')).click().then(function () {
                                                                driver.sleep(3000).then(function () {
                                                                    driver.findElement(By.name('packageName')).sendKeys('Assigning package to Submitter').then(function () {
                                                                        driver.sleep(3000).then(function () {
                                                                           driver.findElement(By.xpath('//div[contains(@class,\'Select-input\')]/input')).sendKeys('1087634').then(function () {
                                                                               driver.findElement(By.xpath('//div[contains(@class,\'Select-menu-outer\')]')).click().then(function () {
                                                                                   driver.findElement(By.xpath('//button[contains(@data-qa,\'CreatePackageModal.assignToSubBtn\')]')).click().then(function () {
                                                                                       driver.findElement(By.xpath( '//div[contains(@data-qa,\'AssignToSubModal.submitter.singleSelect\')]')).click().then(function () {
                                                                                       driver.findElement(By.xpath( '//div[contains(@class,\'AutoComplete-module_autoComplete__1KReT width-all bc-smoke width-all bc-smoke\')]/div/div/div/div/div/div[1]')).click().then(function () {
                                                                                           driver.findElement(By.name('submittalDueDate')).click().then(function () {
                                                                                               driver.sleep(2000).then(function () {
                                                                                                   driver.findElement(By.xpath( '//td[contains(@aria-label,\'Wednesday, June 26, 2019\')]')).click().then(function () {
                                                                                                       driver.findElement(By.xpath( '//div[contains(@data-qa,\'WatcherTypeahead\')]/div/input')).click().then(function () {
                                                                                                          // driver.findElement(By.xpath('//div[contains (@data-qa,\'5cb6f93b22c5ea002be411bc\')]/div/p[1]')).click().then(function () {
                                                                                                          driver.findElement(By.xpath( '//div[contains (@data-qa,\'5cc422b6bd3c2e0026048279\')]/div/p[1]')).click().then(function () {
                                                                                                               driver.sleep(2000).then(function () {
                                                                                                                   driver.findElement(By.xpath( '//div[contains(@class,\'flex justify-between bc-smoke\')]/button[2]')).click().then(function () {
                                                                                                                       driver.findElement(By.name('notes')).sendKeys('This is my first FTUX Automation code. Feeling Happy :)').then(function () {
                                                                                                                           driver.findElement(By.xpath( '//div[contains(@class,\'flex justify-between bc-smoke\')]/button[2]')).click().then(function () {
                                                                                                                               driver.sleep(6000).then(function () {


                                                                                                                               //Test case3: Package to reviewer creation without items
                                                                                                                               driver.findElement(By.xpath('//div[contains(@class,\'index-module_title__3WmpS\')]/a')).click().then(function () {
                                                                                                                                   driver.sleep(6000).then(function () {
                                                                                                                                   driver.findElement(By.xpath( '//button[contains(@data-qa,\'PackageList.newPackageBtn\')]/span')).click().then(function () {
                                                                                                                                       driver.sleep(3000).then(function () {
                                                                                                                                       driver.findElement(By.xpath( '//button[contains(@data-qa,\'SelectItemsModal.createWithoutBtn\')]/div')).click().then(function () {
                                                                                                                                           driver.sleep(4000).then(function () {
                                                                                                                                           driver.findElement(By.name('packageName')).sendKeys('Create Package without Item').then(function () {
                                                                                                                                               driver.sleep(4000).then(function () {
                                                                                                                                               driver.findElement(By.xpath( '//div[contains(@class,\'Checkbox-module_box__PubCh\')]')).click().then(function () {
                                                                                                                                                     driver.findElement(By.xpath( '//button[contains(@data-qa,\'CreatePackageModal.assignToRevBtn\')]/div')).click().then(function () {
                                                                                                                                                         driver.findElement(By.xpath('//div[contains(@class,\'PillBox-module_pillbox__z-8Ar\')]')).click().then(function () {
                                                                                                                                                             driver.findElement(By.xpath('//div[contains(@data-qa,\'5cc85c3652aa6e002832aa5d\')]/div/p[1]')).click().then(function () {
                                                                                                                                                                 driver.sleep(3000).then(function () {
                                                                                                                                                                     //driver.findElement(By.xpath('//div[contains(@class,\'flex justify-center items-center free-left free-right pt2\')]/a/input')).click().then(function () {
                                                                                                                                                                     driver.findElement(By.xpath('//input[contains(@type,\'file\')]')).sendKeys('/Users/sonalibiswas/WebstormProjects/PlanGrid-Automation/Tests/Submittal_packages_06-20-2019.pdf').then(function () {
                                                                                                                                                                        driver.sleep(6000).then(function () {
                                                                                                                                                                         driver.findElement(By.xpath( '//div[contains(@data-qa,\'WatcherTypeahead\')]/div/input')).click().then(function () {
                                                                                                                                                                            // driver.findElement(By.xpath('//div[contains(@data-qa,\'5b7a642a7e7bec002b709aa7\')]/div/p[1]')).click().then(function () {
                                                                                                                                                                                 driver.findElement(By.xpath( '//div[contains (@data-qa,\'5cc422b6bd3c2e0026048279\')]/div/p[1]')).click().then(function () {
                                                                                                                                                                                     driver.sleep(6000).then(function () {
                                                                                                                                                                                 driver.findElement(By.xpath('//button[contains(@data-qa,\'AssignToRevModal.nextBtn\')]')).click().then(function () {
                                                                                                                                                                                     driver.sleep(6000).then(function () {
                                                                                                                                                                                     driver.findElement(By.name('notes')).sendKeys('Assigning the package to the Reviewer :)').then(function () {
                                                                                                                                                                                         driver.sleep(3000).then(function () {
                                                                                                                                                                                         driver.findElement(By.xpath('//div[contains(@class,\'flex justify-between bc-smoke\')]/button[2]')).click().then(function () {
                                                                                                                                                                                             driver.sleep(6000).then(function () {
                                                                                                                                                                                             driver.findElement(By.xpath('//button[contains(@data-qa,\'submittals.pkg-detail.submit-review-btn\')]')).click().then(function () {
                                                                                                                                                                                                 driver.sleep(3000).then(function () {
                                                                                                                                                                                                     driver.findElement(By.xpath('//select[contains(@name,\'reviewResponseId\')]/option[3]')).click().then(function () {
                                                                                                                                                                                                         driver.sleep(3000).then(function () {
                                                                                                                                                                                                         driver.findElement(By.xpath('//button[contains(@data-qa,\'DesignReviewModal.submitBtn\')]')).click().then(function () {
                                                                                                                                                                                                             driver.sleep(6000).then(function () {
                                                                                                                                                                                                                 driver.findElement(By.xpath('//div[contains(@class,\'flex justify-center mt2\')]/button[2]')).click().then(function () {
                                                                                                                                                                                                                     driver.findElement(By.xpath('//div[contains(@data-qa,\'item-d18e90c9-70cd-438f-89ff-669a459b8d60\')]')).click().then(function () {
                                                                                                                                                                                                                         driver.sleep(3000).then(function () {
                                                                                                                                                                                                                             driver.findElement(By.xpath('//button[contains(@data-qa,\'PublishModal.nextBtn\')]')).click().then(function () {
                                                                                                                                                                                                                                 driver.findElement(By.name('notes')).sendKeys('Publish Package :)').then(function () {
                                                                                                                                                                                                                                     driver.sleep(3000).then(function () {
                                                                                                                                                                                                                                     driver.findElement(By.xpath('//button[contains(@data-qa,\'PublishModal.publishBtn\')]')).click().then(function () {
                                                                                                                                                                                                                                     });
                                                                                                                                                                                                                                     });
                                                                                                                                                                                                                                 });
                                                                                                                                                                                                                             });
                                                                                                                                                                                                                             });
                                                                                                                                                                                                                     });
                                                                                                                                                                                                                 });
                                                                                                                                                                                                             });
                                                                                                                                                                                                         });
                                                                                                                                                                                                         });
                                                                                                                                                                                                 });
                                                                                                                                                                                                 });
                                                                                                                                                                                             });
                                                                                                                                                                                             });
                                                                                                                                                                                         });
                                                                                                                                                                                     });
                                                                                                                                                                                     });
                                                                                                                                                                                     });
                                                                                                                                                                                     });
                                                                                                                                                                                     });
                                                                                                                                                                                 });
                                                                                                                                                                                 });
                                                                                                                                                                             });
                                                                                                                                                                        });
                                                                                                                                                                        });
                                                                                                                                                                    });
                                                                                                                                                            // });

                                                                                                                                                             //    });
                                                                                                                                                             });
                                                                                                                                                         });
                                                                                                                                                     });
                                                                                                                                               });
                                                                                                                                           });
                                                                                                                                           });
                                                                                                                                           });
                                                                                                                                       });
                                                                                                                                       });
                                                                                                                                   });
                                                                                                                                   });
                                                                                                                           });
                                                                                                                               });
                                                                                                                           });

                                                                                                                   });
                                                                                                               });
                                                                                                          });
                                                                                                          });
                                                                                                       });
                                                                                                   });
                                                                                               });
                                                                                           });
                                                                                       });
                                                                                       });
                                                                                       });
                                                                                   });
                                                                                   });
                                                                           });
                                                                        });
                                                                    });
                                                                });




                                                    });


                                                    });
                                                                });
                                                });
                                                    });
                                                        });
                                            });
                                                });
                                            });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    });

     //test-case end



     //Test case2


    it('user should be able to logout',function() {
        const driver = new webdriver.Builder().forBrowser('chrome').build();

        driver.get('https://plangrid-test.planfront.net/login');
        driver.manage().window().maximize().then(function () {
            driver.findElement(By.id('test-email')).sendKeys('sonali.jana@plangrid.com').then(function () {
                driver.findElement(By.id('test-submitLogin')).click().then(function () {
                    driver.sleep(3000).then(function () {
                        driver.findElement(By.id('test-password')).sendKeys('infy@123').then(function () {
                            driver.findElement(By.id('test-submitLogin')).click().then(function () {
                                driver.sleep(7000).then(function () {
                                    driver.findElement(By.id('test-accountDropdown')).click().then(function () {
                                        driver.sleep(3000).then(function () {
                                        driver.findElement(By.xpath('//*[@id="test-logout"]')).click().then(function () {


                                    });
                                        });
                         });
                                });
                            });
                        });
                    });
                });
            });

        });

    }); //test-case end



    //Test case3


    it('user should not be able to login - invalid username/passwd', async function() {

        const driver = new webdriver.Builder().forBrowser('chrome').build();

        driver.get('https://plangrid-test.planfront.net/login');
        driver.manage().window().maximize().then(function () {
            driver.findElement(By.id('test-email')).sendKeys('sonali.jana@plangrid.com').then(function () {
                driver.findElement(By.id('test-submitLogin')).click().then(function () {
                    driver.sleep(3000).then(function () {
                        driver.findElement(By.id('test-password')).sendKeys('node@123').then(function () {
                            driver.findElement(By.id('test-submitLogin')).click().then(function () {
                                driver.sleep(3000).then(function () {

                                    driver.findElement(By.xpath('//div[contains(@class,\'error-alert\')]/span')).getText().then(function (text) {
                                        expect(text).contains('Your password is incorrect or an account with email ');
                                    });
                                });

                            });
                        });
                    });
                });
            });
        });

    });
    //test-case end



    //test-suite end

