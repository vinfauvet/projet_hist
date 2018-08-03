//*************************variable de base*********************
var fond = document.getElementById('body');
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var boite_dialog = document.getElementById('boite_dialog');
var tete = document.getElementById('imdet');
var ndiag = document.getElementById('ndiag');
var diag = document.getElementById('diag');
var inv = document.getElementById('inv');
var audio = document.getElementById('audio');
//*************************variable de base***** fin ***********









//**************************** Étape Intro ***************************

p1.style.visibility = "hidden";
p2.style.visibility = "hidden";
boite_dialog.style.visibility = "hidden";
fond.style.background = "url('images/fond/bus.jpg')";
audio.innerHTML = "<audio autoplay><source src='musique/busro.mp3'></audio>"
window.setTimeout(intro, 1000);

function intro() {
  boite_dialog.style.visibility = "visible";
  tete.style.backgroundImage = "none";
  diag.innerHTML = "Vous allez intégrer la grande école de Simplon.co. (clim et connexion internet non fournies dans les salles.)"

}
window.setTimeout(intro1, 8000);

function intro1() {
  var et1 = confirm("Êtes-vous prêt à commencer l'histoire ?");
  boite_dialog.style.visibility = "hidden";
  tete.style.backgroundImage = "url('images/tetes/pret.png')";

  //**************************** Étape Intro *****************fin*******









  //**************************** Étape 1 ***************************

  if (et1) {
    window.setTimeout(e1_ff1, 1000);

    function e1_ff1() {
      audio.innerHTML = "<audio autoplay><source src='musique/busar.mp3'></audio>"

    }

    window.setTimeout(e1_ff2, 3000);

    function e1_ff2() {
      fond.style.background = "url('images/fond/bus2.jpg')";
      fond.style.backgroundSize = "cover";
      audio.innerHTML = "<audio autoplay><source src='musique/busdes.mp3'></audio>"

    }
    window.setTimeout(e1_ff3, 6000);

    function e1_ff3() {
      fond.style.backgroundImage = "url('images/fond/uni.jpg')";
      fond.style.backgroundSize = "none";
      diag.innerHTML = "";
      audio.innerHTML = "";
    }

    window.setTimeout(e1_pp1, 8000);

    function e1_pp1() {
      p1.style.visibility = "visible";

    }

    window.setTimeout(e1_pbd, 9000);

    function e1_pbd() {
      boite_dialog.style.visibility = "visible";

    }

    window.setTimeout(e1_josh1, 9500);

    function e1_josh1() {
      ndiag.innerHTML = "???? :";
      diag.innerHTML = "Salut... tu es nouveau n'est-ce pas ? C'est le doyen qui m'envoie. Moi c'est Josh.";
    }


    window.setTimeout(e1_josh2, 13500);

    function e1_josh2() {
      ndiag.innerHTML = "Josh :";
      diag.innerHTML = "Et toi ? C'est comment ton nom ?";
    }

    window.setTimeout(al_nom, 16500);

    function al_nom() {
      do {
        var nom = prompt('Écris ton nom : ')
      } while (!nom);
      diag.innerHTML = "<span class='prompt maj'>" + nom + "</span>... T'es parents on perdu au scrable quant-ils ont choisies ton nom ?"
      window.setTimeout(e1_josh3, 3000);

      function e1_josh3() {
        ndiag.innerHTML = "Josh :";
        diag.innerHTML = "...";
      }


      window.setTimeout(e1_josh4, 5000);

      function e1_josh4() {
        ndiag.innerHTML = "Josh :";
        diag.innerHTML = "Bon... suis moi le doyen t'attends.";

      }
      window.setTimeout(e1_fin, 8000);

      function e1_fin() {

        p1.style.visibility = "hidden";
        p2.style.visibility = "hidden";
        boite_dialog.style.visibility = "hidden";
        fond.style.background = "black";
        var et2 = confirm("Continuer l'histoire ?");

        //**************************** Étape 1 *****************fin*******









        //**************************** Étape 2 ***************************

        if (et2) {

          window.setTimeout(e2_ff, 1000);

          function e2_ff() {
            fond.style.backgroundSize = "cover";
            fond.style.backgroundImage = "url('images/fond/coul.jpg')";
            diag.innerHTML = "";
          }
          window.setTimeout(e2_pp1, 2000);

          function e2_pp1() {
            p1.style.visibility = "visible";

          }

          window.setTimeout(e2_pbd, 3000);

          function e2_pbd() {
            boite_dialog.style.visibility = "visible";

          }
          window.setTimeout(e2_josh1, 3500);

          function e2_josh1() {
            ndiag.innerHTML = "Josh :";
            diag.innerHTML = "<span class='prompt maj'>" + nom + "</span>... arrête de flanner et suis moi ! C'est par-là.";
          }

          window.setTimeout(e2_newt1, 7000);

          function e2_newt1() {
            ndiag.innerHTML = "???? :";
            diag.innerHTML = "Hello !";
            tete.style.backgroundImage = "url('images/tetes/newt.png')";
          }

          window.setTimeout(e2_pp2, 7500);

          function e2_pp2() {
            p2.style.visibility = "visible";

          }
          window.setTimeout(e2_josh2, 10000);

          function e2_josh2() {
            tete.style.backgroundImage = "url('images/tetes/pret.png')";
            ndiag.innerHTML = "Josh :";
            diag.innerHTML = "Que fais-tu là ? Tu ne devrais pas être déjà en salle de cours ?";
          }
          window.setTimeout(e2_newt2, 13000);

          function e2_newt2() {
            tete.style.backgroundImage = "url('images/tetes/newt.png')";
            ndiag.innerHTML = "???? :";
            diag.innerHTML = "Tu n'y étais pas non plus. Je suis venu voir qui ce que tu faisais. Tiens qui est-ce ? Je ne te connais pas.";
          }
          window.setTimeout(e2_josh3, 18000);

          function e2_josh3() {
            tete.style.backgroundImage = "url('images/tetes/pret.png')";
            ndiag.innerHTML = "Josh :";
            diag.innerHTML = "C'est <span class='prompt maj'>" + nom + "</span>... le doyen a accepté son inscription tardive.";
          }
          window.setTimeout(e2_newt3, 22000);

          function e2_newt3() {
            tete.style.backgroundImage = "url('images/tetes/newt.png')";
            ndiag.innerHTML = "???? :";
            diag.innerHTML = "Enchanté et bienvenue ! Moi c'est Newt.";
          }
          window.setTimeout(e2_newt4, 25000);

          function e2_newt4() {
            tete.style.backgroundImage = "url('images/tetes/newt.png')";
            ndiag.innerHTML = "Newt :";
            diag.innerHTML = "Tu vas voir ! Tu vas être très bien ici !";
          }
          window.setTimeout(e2_newt5, 28000);

          function e2_newt5() {
            tete.style.backgroundImage = "url('images/tetes/newt.png')";
            ndiag.innerHTML = "Newt :";
            diag.innerHTML = "Ne te fie pas à lui. On est pas tous aussi accueillant que lui. *fais un clin d'oeil*";
          }
          window.setTimeout(e2_josh4, 32000);

          function e2_josh4() {
            tete.style.backgroundImage = "url('images/tetes/pret.png')";
            ndiag.innerHTML = "Josh :";
            diag.innerHTML = "Pfff... Aller <span class='prompt maj'>" + nom + "</span>. On doit y aller.";
          }
          window.setTimeout(e2_newt6, 34000);

          function e2_newt6() {
            tete.style.backgroundImage = "url('images/tetes/newt.png')";
            ndiag.innerHTML = "Newt :";
            diag.innerHTML = "Où allez-vous ?";
          }
          window.setTimeout(e2_josh5, 36000);

          function e2_josh5() {
            tete.style.backgroundImage = "url('images/tetes/pret.png')";
            ndiag.innerHTML = "Josh :";
            diag.innerHTML = "Chez le doyen. Il a demandé après <span class='prompt maj'>" + nom + "</span>.";
          }
          window.setTimeout(e2_newt7, 39000);

          function e2_newt7() {
            tete.style.backgroundImage = "url('images/tetes/newt.png')";
            ndiag.innerHTML = "Newt :";
            diag.innerHTML = "Je peux l'accompagner si tu veux.";
          }
          window.setTimeout(e2_josh6, 42000);

          function e2_josh6() {
            tete.style.backgroundImage = "url('images/tetes/pret.png')";
            ndiag.innerHTML = "Josh :";
            diag.innerHTML = "Pourquoi pas. J'avais d'autres choses à faire de toute façon.";
          }

          window.setTimeout(e2_josh8, 45000);

          function e2_josh8() {
            tete.style.backgroundImage = "url('images/tetes/pret.png')";
            ndiag.innerHTML = "Josh :";
            diag.innerHTML = "...";
          }
          window.setTimeout(e2_pp1end, 46000);

          function e2_pp1end() {
            p1.style.visibility = "hidden";

          }
          window.setTimeout(e2_newt8, 46500);

          function e2_newt8() {
            tete.style.backgroundImage = "url('images/tetes/newt.png')";
            ndiag.innerHTML = "Newt :";
            diag.innerHTML = "Quel aimable celui là !";
          }
          window.setTimeout(e2_newt9, 48000);

          function e2_newt9() {
            tete.style.backgroundImage = "url('images/tetes/newt.png')";
            ndiag.innerHTML = "Newt :";
            diag.innerHTML = "Au fait ! Avant d'y aller... d'où viens-tu ? On vis peut-être dans la même zone sans le savoir.";
          }

          window.setTimeout(al_ville, 52000);

          function al_ville() {
            do {
              var ville = prompt('Écris de ta ville : ')
            } while (!ville);
            diag.innerHTML = "Tu vis à <span class='prompt maj'>" + ville + "</span>. C'est un très bel endoit. *clin d'oeil*"


            window.setTimeout(e2_newt10, 3000);

            function e2_newt10() {
              tete.style.backgroundImage = "url('images/tetes/newt.png')";
              ndiag.innerHTML = "Newt :";
              diag.innerHTML = "On ferait mieux d'y aller. Le doyen risque de raler sinon.";
            }
            window.setTimeout(e2_fin, 7000);

            function e2_fin() {

              p1.style.visibility = "hidden";
              p2.style.visibility = "hidden";
              boite_dialog.style.visibility = "hidden";
              fond.style.background = "black";
              var et3 = confirm("Continuer l'histoire ?");
              //**************************** Étape 2 *****************fin*******









              //**************************** Étape 3 ***************************

              if (et3) {

                window.setTimeout(e3_ff, 1000);

                function e3_ff() {
                  fond.style.backgroundSize = "cover";
                  fond.style.backgroundImage = "url('images/fond/bur.jpg')";
                  diag.innerHTML = "";
                }

                window.setTimeout(e3_pp2, 2000);

                function e3_pp2() {
                  p2.style.visibility = "visible";
                }
                window.setTimeout(e3_pbd, 3000);

                function e3_pbd() {
                  boite_dialog.style.visibility = "visible";

                }
                window.setTimeout(e3_newt1, 4000);

                function e3_newt1() {
                  tete.style.backgroundImage = "url('images/tetes/newt.png')";
                  ndiag.innerHTML = "Newt :";
                  diag.innerHTML = "MONSIEUR LE DOYEN !! J'AI AMENÉ <span class='prompt maj2'>" + nom + "</span> !";
                }

                window.setTimeout(e3_doy1, 7000);

                function e3_doy1() {
                  tete.style.backgroundImage = "url('images/tetes/doy.png')";
                  ndiag.innerHTML = "Doyen :";
                  diag.innerHTML = "Je suis là !! Pas la peine de crier !!";
                }

                window.setTimeout(e3_pp1, 8000);

                function e3_pp1() {
                  p1.style.backgroundImage = "url('images/corps/doy.png')";

                }

                window.setTimeout(e3_pp1_2, 8500);

                function e3_pp1_2() {
                  p1.style.backgroundImage = "url('images/corps/doy.png')";
                  p1.style.visibility = "visible";

                }
                window.setTimeout(e3_doy2, 11000);

                function e3_doy2() {
                  tete.style.backgroundImage = "url('images/tetes/doy.png')";
                  ndiag.innerHTML = "Doyen :";
                  diag.innerHTML = "Et que fais-tu là d'abord ?! Ce n'est pas toi que j'ai envoyé chercher <span class='prompt maj'>" + nom + "</span> !";
                }

                window.setTimeout(e3_newt2, 14000);

                function e3_newt2() {
                  tete.style.backgroundImage = "url('images/tetes/newt.png')";
                  ndiag.innerHTML = "Newt :";
                  diag.innerHTML = "J'ai proposé à Josh de le remplacer. Il n'a pas insisté.";
                }

                window.setTimeout(e3_doy3, 18000);

                function e3_doy3() {
                  tete.style.backgroundImage = "url('images/tetes/doy.png')";
                  ndiag.innerHTML = "Doyen :";
                  diag.innerHTML = "Ah celui la... vas falloir que j'aille le voir pour avoir une disccution avec lui.";
                }

                window.setTimeout(e3_doy4, 22000);

                function e3_doy4() {
                  tete.style.backgroundImage = "url('images/tetes/doy.png')";
                  ndiag.innerHTML = "Doyen :";
                  diag.innerHTML = "Très bien. Merci Newt. Vas en classe maintenant.";
                }
                window.setTimeout(e3_newt3, 25000);

                function e3_newt3() {
                  tete.style.backgroundImage = "url('images/tetes/newt.png')";
                  ndiag.innerHTML = "Newt :";
                  diag.innerHTML = "D'accord.";
                }

                window.setTimeout(e3_newt8, 27000);

                function e3_newt8() {
                  tete.style.backgroundImage = "url('images/tetes/newt.png')";
                  ndiag.innerHTML = "Newt :";
                  diag.innerHTML = "A tout à l'heure <span class='prompt maj'>" + nom + "</span> !";
                }

                window.setTimeout(e3_pp2_end, 30000);

                function e3_pp2_end() {
                  p2.style.visibility = "hidden";
                }

                window.setTimeout(e3_doy5, 31000);

                function e3_doy5() {
                  tete.style.backgroundImage = "url('images/tetes/doy.png')";
                  ndiag.innerHTML = "Doyen :";
                  diag.innerHTML = "Maintenant que nous sommes seul, occupons nous rapidement de ton inscription.";
                }
                window.setTimeout(e3_doy6, 35000);

                function e3_doy6() {
                  tete.style.backgroundImage = "url('images/tetes/doy.png')";
                  ndiag.innerHTML = "Doyen :";
                  diag.innerHTML = "Tu as déjà rempli certaines infomations dans le formulaire d'inscription, il nous manque juste ton années de naissance.";
                }

                window.setTimeout(al_age, 39000);

                function al_age() {
                  do {
                    var date = parseInt(prompt('Écris de ton année de naissance : ', '0'));
                  } while (!date && isNaN(date));
                  var age = 2018 - parseInt(date);
                  diag.innerHTML = "..."

                  window.setTimeout(e3_doy6, 2000);

                  function e3_doy6() {
                    tete.style.backgroundImage = "url('images/tetes/doy.png')";
                    ndiag.innerHTML = "Doyen :";
                    diag.innerHTML = "Je vois tu as déjà " + age + ". Tu es encore bien jeune ! eh eh eh !";
                  }
                  window.setTimeout(e3_doy7, 5000);

                  function e3_doy7() {
                    tete.style.backgroundImage = "url('images/tetes/doy.png')";
                    ndiag.innerHTML = "Doyen :";
                    diag.innerHTML = "C'est tout ce qui manquais a ton inscription. Tu peux rejoindre tes camarades.";
                  }
                  window.setTimeout(e3_doy8, 8000);

                  function e3_doy8() {
                    tete.style.backgroundImage = "url('images/tetes/doy.png')";
                    ndiag.innerHTML = "Doyen :";
                    diag.innerHTML = "La salle se trouve au rez-de-chaussée juste après les escaliers, salle 1001. ";
                  }
                  window.setTimeout(e3_doy9, 8000);

                  function e3_doy9() {
                    tete.style.backgroundImage = "url('images/tetes/doy.png')";
                    ndiag.innerHTML = "Doyen :";
                    diag.innerHTML = "Avant de partir ! Pourrais-tu donner ce bouquin a Newt ? ";
                  }

                  window.setTimeout(e3_doy10, 11000);

                  function e3_doy9() {
                    inv.style.backgroundImage = "url('images/icone/livre.png')"
                    tete.style.backgroundImage = "url('images/tetes/doy.png')";
                    ndiag.innerHTML = "Doyen :";
                    diag.innerHTML = "Il me l'avez demandé, il y a quelque jour. Je n'ai pas pensé à lui demander. ";
                  }
                  window.setTimeout(e3_fin, 14000);

                  function e3_fin() {
                    p1.style.visibility = "hidden";
                    p2.style.visibility = "hidden";
                    boite_dialog.style.visibility = "hidden";
                    fond.style.background = "black";
                    var et3 = confirm("Continuer l'histoire ?");
                  }
                  //**************************** Étape 3 *****************fin*******









                  //**************************** Étape 4 ***************************

                  if (et3) {
                    window.setTimeout(e4_ff, 1000);

                    function e4_ff() {
                      fond.style.backgroundSize = "cover";
                      fond.style.backgroundImage = "url('images/fond/bur.jpg')";
                      diag.innerHTML = "";
                    }




                    //**************************** Étape 4 *****************fin*******


                  } else {
                    alert("L'histoire s'arrête ici ;)");
                  }
                }

              } else {
                alert("L'histoire s'arrête ici ;)");
              }

            }




          }


        } else {
          alert("L'histoire s'arrête ici ;)");
        }


      }
    }









    //**************************** Étape 5 ***************************



    //**************************** Étape 5 *****************fin*******
  } else {
    alert("L'histoire ne commencera pas du coup ;)")
  }

}
