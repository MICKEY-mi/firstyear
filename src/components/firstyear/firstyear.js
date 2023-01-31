import React from 'react'
import './firstyear.css';
import '../footer/footer.css';
import First from './firstyear-slybuss.pdf';

import Math1CD from '../../pdf/Maths1/Cont_Diff.pdf';
import Math1IC from '../../pdf/Maths1/Integral_Calculus.pdf';
import Math1ODE from '../../pdf/Maths1/ODE.pdf';
import Math1PDTT from '../../pdf/Maths1/PartialDerivative_TaylorsTheorem.pdf';
import Math1VC from '../../pdf/Maths1/VectorCalculus.pdf';
import Math1BG from '../../pdf/Maths1/Beta&Gamma_functions.pdf';
import JainIyenger from '../../pdf/Maths1/Jain-Iyenger_Advanced Engneering Maths.pdf';


import PhysicsAU from '../../pdf/Physics/ACOUSTICS-ULTRASONICS.pdf';
import PhysicsD from '../../pdf/Physics/Diffraction_1.pdf';
import PhysicsED from '../../pdf/Physics/Electrodynamics(Electro+Magneto)_1.pdf';
import PhysicsI from '../../pdf/Physics/Interference_1.pdf';
import Resnick from '../../pdf/Physics/resnik.pdf';
import PhysicsL from '../../pdf/Physics/Laser_1.pdf';
import PhysicsP from '../../pdf/Physics/Polarisation_1.pdf';
import PhysicsSTR from '../../pdf/Physics/Relativity (STR)_1.pdf';
import PhysicsSS from '../../pdf/Physics/Solid states.pdf';
import PhysicsT from '../../pdf/Physics/Thermodynamics.pdf';
import PhysicsQM from '../../pdf/Physics/Griffiths - Introduction to quantum mechanics.pdf';

import Chemistrynotes from '../../pdf/Chemistry/chem notes.pdf';
import ChemistryC from '../../pdf/Chemistry/Corrosion.pdf';
import ChemistryJJC from '../../pdf/Chemistry/Jain _ Jain_Chemistry.pdf';
import ChemistryL2 from '../../pdf/Chemistry/Lubricants_2.pdf';
import ChemistryL1 from '../../pdf/Chemistry/Lubricants-1.pdf';
import ChemistryPE from '../../pdf/Chemistry/Phase Equilibria_ppt.pdf';
import ChemistryW from '../../pdf/Chemistry/Water_chemistry_ppt.pdf';
import ChemistryP from '../../pdf/Chemistry/polymers-1.pdf';
import ChemistryPQ from '../../pdf/Chemistry/Polymers-practice.pdf';
import ChemistryCB from '../../pdf/Chemistry/Chemical_bonding.pdf';
import ChemistryFC from '../../pdf/Chemistry/Fuel and Combustion.pdf';
import ChemistryGC from '../../pdf/Chemistry/Green Chemistry.pdf';

import Digital1 from '../../pdf/DigitalElectronics/Minimization_Techniques .pdf';
import Digital2 from '../../pdf/DigitalElectronics/Digital handout.pdf';
import DigitalBook from '../../pdf/DigitalElectronics/digital_design-__morris_mano-fifth_edition.pdf';


import Computer1 from '../../pdf/Computer Programming/Computer 1.pdf';
import ComputerO from '../../pdf/Computer Programming/Introduction.pdf';
import ComputerBook from '../../pdf/Computer Programming/Let us C.pdf';
import DSC from '../../pdf/Computer Programming/data-structures-using-c-2nd.pdf';

import Math2APDE from '../../pdf/Maths2/Application of PDE.pdf';
import Math2FS1 from '../../pdf/Maths2/Fourier series_transforms_2.pdf';
import Math2FS2 from '../../pdf/Maths2/FourierSeries_Transform.pdf';
import HKDass from '../../pdf/Maths2/HK DASS.pdf';
import Math2LT1 from '../../pdf/Maths2/Laplace Transforms.pdf';
import Math2LT2 from '../../pdf/Maths2/laplace_2.pdf';
import Math2PDE1 from '../../pdf/Maths2/Partial Differential equations.pdf';
import Math2PDE2 from '../../pdf/Maths2/PDE_2.pdf';
import Math2VSEV from '../../pdf/Maths2/vectorspace_Eigen_value&vectro.pdf';

import Workshop1 from '../../pdf/workshop/Lecture PPTs/ch01- introduction new.pdf';
import Workshop2 from '../../pdf/workshop/Lecture PPTs/ch03- mechanical properties.pdf';
import Workshop3 from '../../pdf/workshop/Lecture PPTs/ch06- metals.pdf';
import Workshop4 from '../../pdf/workshop/Lecture PPTs/ch10- casting introd.pdf';
import Workshop5 from '../../pdf/workshop/Lecture PPTs/ch11- casting processes.pdf';
import Workshop6 from '../../pdf/workshop/Lecture PPTs/ch19- metal working.pdf';
import Workshop7 from '../../pdf/workshop/Lecture PPTs/ch20 - sheet metal working.pdf';
import Workshop8 from '../../pdf/workshop/Lecture PPTs/ch21- Theory of Metal Machining.pdf';
import Workshop9 from '../../pdf/workshop/Lecture PPTs/ch22 - Machining Operations and MachineTools.pdf';
import Workshop10 from '../../pdf/workshop/Lecture PPTs/ch30 Fundamentals of Welding.pdf';
import Workshop11 from '../../pdf/workshop/Lecture PPTs/ch31 Welding Processes.pdf';
import Workshop12 from '../../pdf/workshop/Lecture PPTs/ch32 Brazing Soldering.pdf';

import WorkshopMC from '../../pdf/workshop/ME-11102 - Manufacturing - Casting.pptx';
import WorkshopM from '../../pdf/workshop/ME-11102 -WS -MATERIALS.pptx';
import WorkshopBOOK1 from '../../pdf/workshop/1.Fundamentals of modern manufacturing 5th Edition.pdf';
import Groover from '../../pdf/workshop/MANUFACTURING MP GROOVER.pdf';


import EcologyCF from '../../pdf/Ecology1/1. Carbon_Foot.pdf';
import EcologyET from '../../pdf/Ecology1/2. ENV_TREATIES_ALL.pdf';
import EcologySEIA from '../../pdf/Ecology1/3. SEIA.pdf';
import EcologyP from '../../pdf/Ecology1/4. Pollution.pdf';
import EcologyNotes from '../../pdf/Ecology1/ECOLOGY shortnotes.pdf';
import EcologyI from '../../pdf/Ecology1/Topic-1_ Introduction.pdf';
import EcologyEC from '../../pdf/Ecology1/Topic-2_ Env_Challenges.pdf';
import EcologyNR from '../../pdf/Ecology1/Topic-3 and 4_ Natural Resources.pdf';
import EcologySD from '../../pdf/Ecology1/Topic-5_SUS_DEV.pdf';


import GraphicsA1 from '../../pdf/Graphics/autocad.pdf';
import GraphicsA2 from '../../pdf/Graphics/Autocad_commands.pdf';
import GraphicsKJ from '../../pdf/Graphics/Knuckle_Joint.pdf';
import GraphicsPL from '../../pdf/Graphics/Projection_of_Lines.pdf';
import GraphicsPP from '../../pdf/Graphics/Projection_of_Points.pdf';
import GraphicsSS from '../../pdf/Graphics/Section _of_Solids.pdf';
import GraphicsTF from '../../pdf/Graphics/Threaded_Fastners.pdf';

import CSW1 from '../../pdf/CSW/Communi_skill workshop.pdf';
import CSWOC from '../../pdf/CSW/Oral communication.pdf';
import CSWGD from '../../pdf/CSW/Group Discussion.pdf';
import CSWI from '../../pdf/CSW/Interview.pdf';
import CSWBFIR from '../../pdf/CSW/feedback_BFIR MODEL.pdf';

import BEEDC from '../../pdf/Essentials of EE/Dc_network.pdf';
import BEENT1 from '../../pdf/Essentials of EE/BEE1.pdf';
import BEENT2 from '../../pdf/Essentials of EE/Basic_elect. eng _2.pdf';
import BEENT3 from '../../pdf/Essentials of EE/Basic electrical engineering 1.pdf';
import BEEMC1 from '../../pdf/Essentials of EE/magnetic circuit.pdf';
import BEEMC2 from '../../pdf/Essentials of EE/Magnetic Circuits (1).pptx';
import BEENotes from '../../pdf/Essentials of EE/BEE_NOTES.pdf';
import BEET from '../../pdf/Essentials of EE/transformers.pdf';
import BEEDCM from '../../pdf/Essentials of EE/Dc machines.pdf';

import EMIAI from '../../pdf/EMI/analog instruments.pdf';
import EMICRO from '../../pdf/EMI/Cro.pdf';
import EMICTPT from '../../pdf/EMI/Ct _Pt.pdf';
import EMIB from '../../pdf/EMI/Bridges.pdf';
import EMIBook from '../../pdf/EMI/A_K_Sawhney_A_course_in_Electrical_and_E(1).docx';

import POED1 from '../../pdf/POE/Diode-1.pdf';
import POED2 from '../../pdf/POE/Diode-2.pdf';
import POED3 from '../../pdf/POE/diode.pdf';
import POEBJT1 from '../../pdf/POE/BJT.pdf';
import POEBF from '../../pdf/POE/BJT and FET.pdf';
import POEFJM from '../../pdf/POE/FET.pdf';
import POEOA1 from '../../pdf/POE/OPAMP.pdf';
import POEOA2 from '../../pdf/POE/opamp (2).pdf';

import NMSTAT from '../../pdf/nmst/root.pdf';
import NMSTI from '../../pdf/nmst/interpolation.pdf';
import NMSTNDI from '../../pdf/nmst/Numerical differentiation and Integraion.pdf';
import NMSTCF from '../../pdf/nmst/curve fitting.pdf';
import NMSTCS from '../../pdf/nmst/Cubicspline.pdf';
import NMSTNLA from '../../pdf/nmst/linear algebra.pdf';
import NMSTCR from '../../pdf/nmst/Regression_analysis.pdf';

const firstyear = () => {
    return (

        <div className='all'>

            <a href={First}><div className='slybuss'>
                <h4>Download Curriculum</h4>
            </div>
            </a>
            <div id='body_footer'>
                <div className='material'>
                    <div className='parallel'>

                        <ul id="navlist" >



                            <div>
                                <li >Mathematics-I
                                    <ul id="sub_navlist" >
                                        <a href={Math1CD}><li>Continuity and Differentiability</li></a>
                                        <a href={Math1PDTT}><li>Partial Derivatives and Taylors Theorem</li></a>
                                        <a href={Math1IC}><li>Integral Calculus</li></a>
                                        <a href={Math1BG}><li>Beta and Gamma Functions</li></a>
                                        <a href={Math1VC}><li>Vector Calculus</li></a>
                                        <a href={Math1ODE}><li>Ordinary Differential Equation</li></a>
                                        <a href={JainIyenger}><li id="book">BOOK : Jain&Iyenger</li></a>
                                    </ul>
                                </li>
                            </div>

                            <div>
                                <li>Physics
                                    <ul id="sub_navlist">
                                        <a href={PhysicsED}><li>Electrodynamics</li></a>
                                        <a href={PhysicsQM}><li>Quantum Mechanics</li></a>
                                        <a href={PhysicsSS}><li>Solid State Physics</li></a>
                                        <a href={PhysicsI}><li>Interference</li></a>
                                        <a href={PhysicsD}><li>Diffraction</li></a>
                                        <a href={PhysicsP}><li>Polarisation</li></a>
                                        <a href={PhysicsL}><li>Laser</li></a>
                                        <a href={PhysicsSTR}><li>Special Theory of Relativity</li></a>
                                        <a href={PhysicsT}><li>Thermodynamics</li></a>
                                        <a href={PhysicsAU}><li>Acoustics</li></a>
                                        <a href={Resnick}><li id="book">BOOK : Special Theory of Relativity-R.Resnick</li></a>
                                    </ul>
                                </li>
                            </div>

                            <div>
                                <li>Chemistry
                                    <ul id="sub_navlist">
                                        <a href={ChemistryW}><li>Water Chemistry</li></a>
                                        <a href={ChemistryL1}><li>Lubricants1</li></a>
                                        <a href={ChemistryL2}><li>Lubricants2</li></a>
                                        <a href={ChemistryPE}><li>Phase and Equilibrium</li></a>
                                        <a href={ChemistryP}><li>Polymer</li></a>
                                        <a href={ChemistryPQ}><li>Polymer-Questions</li></a>
                                        <a href={ChemistryCB}><li>Chemical Bonding</li></a>
                                        <a href={ChemistryFC}><li>Fuel and Combustion</li></a>
                                        <a href={ChemistryC}><li>Corrosion</li></a>
                                        <a href={ChemistryGC}><li>Green Chemistry</li></a>
                                        <a href={Chemistrynotes}><li>Short-Notes</li></a>
                                        <a href={ChemistryJJC}><li id="book">BOOK : Jain and Jain</li></a>
                                    </ul>
                                </li>
                            </div>

                            <div>
                                <li>Digital Electronics
                                    <ul id="sub_navlist">
                                        <a href={Digital1}><li>Minimization Techniques</li></a>
                                        <a href={Digital2}><li>Basics of DigitalElectronics</li></a>
                                        <a href={DigitalBook}><li id="book">BOOK : Morris Mano</li></a>

                                    </ul>
                                </li>
                            </div>

                            <div>
                                <li>Essentials of Electrical Engineering and BEE
                                    <ul id="sub_navlist">
                                        <a href={BEEDC}><li>Introduction to DC Networks</li></a>
                                        <a href={BEENT1}><li>Network Theorems1</li></a>
                                        <a href={BEENT2}><li>Network Theorems2</li></a>
                                        <a href={BEENT3}><li>Network Theorems3</li></a>
                                        <a href={BEEMC1}><li>Magnetic Circuits1</li></a>
                                        <a href={BEEMC2}><li>Magnetic Circuits2</li></a>
                                        <a href={BEET}><li>Transformer</li></a>
                                        <a href={BEEDCM}><li>DC Machines</li></a>
                                        <a href={BEENotes}><li>Full Notes</li></a>
                                    </ul>
                                </li>
                            </div>

                            <div>
                                <li>Electrical Measurement & Instrumentation or EMMI
                                    <ul id="sub_navlist">
                                        <a href={EMIAI}><li>Analog Instruments</li></a>
                                        <a href={EMICRO}><li>CRO</li></a>
                                        <a href={EMICTPT}><li>CT & PT</li></a>
                                        <a href={EMIB}><li>Bridges</li></a>
                                        <a href={EMIBook}><li id="book">BOOK : A.K_Sawhney</li></a>

                                    </ul>
                                </li>
                            </div>

                            <div>
                                <li>Computer Programming and Organisation
                                    <ul id="sub_navlist">
                                        <a href={Computer1}><li>C language</li></a>
                                        <a href={ComputerO}><li>Computer Organisation</li></a>
                                        <a href={ComputerBook}><li id="book">BOOK : Let us C - Y.kanetkar</li></a>
                                    </ul>
                                </li>
                            </div>



                            <div>
                                <li>Numerical Methods And Statistical Techniques
                                    <ul id="sub_navlist">
                                        <a href={NMSTAT}><li>Algebric and Transcendental Equation</li></a>
                                        <a href={NMSTI}><li>Interpolation</li></a>
                                        <a href={NMSTCF}><li>Curve Fitting</li></a>
                                        <a href={NMSTNDI}><li>Numerical differentiation and Integration</li></a>
                                        <a href={NMSTNLA}><li>Numerical Linear Algebra</li></a>
                                        <a href={NMSTCR}><li>Statical Computations</li></a>
                                        <a href={NMSTCS}><li>Cubicspline</li></a>
                                    </ul>
                                </li>
                            </div>

                        </ul>
                    </div>


                    <div className='parallel'>
                        <ul id="navlist">

                            <li>Mathematics-II
                                <ul id="sub_navlist">
                                    <a href={Math2PDE1}><li>Partial Differential Equation1</li></a>
                                    <a href={Math2PDE2}><li>Partial Differential Equation2</li></a>
                                    <a href={Math2APDE}><li>Application of PDE</li></a>
                                    <a href={Math2LT1}><li>Laplace Transform1</li></a>
                                    <a href={Math2LT2}><li>Laplace Transform2</li></a>
                                    <a href={Math2FS1}><li>Fourier Series1</li></a>
                                    <a href={Math2FS2}><li>Fourier Series2</li></a>
                                    <a href={Math2VSEV}><li>Vector Space & Eigen value and Vector</li></a>
                                    <a href={HKDass}><li id='book'>BOOK: Jain and Iyenger</li></a>
                                </ul>
                            </li>



                            <li>Workshop and Manufacturing Processes
                                <ul id="sub_navlist">
                                    <a href={WorkshopMC}><li>Concepts of Manufacturing and Casting</li></a>
                                    <a href={Workshop1}><li>Chapter1</li></a>
                                    <a href={Workshop2}><li>Chapter2</li></a>
                                    <a href={Workshop3}><li>Chapter3</li></a>
                                    <a href={Workshop4}><li>Chapter4</li></a>
                                    <a href={Workshop5}><li>Chapter5</li></a>
                                    <a href={Workshop6}><li>Chapter6</li></a>
                                    <a href={Workshop7}><li>Chapter7</li></a>
                                    <a href={Workshop8}><li>Chapter8</li></a>
                                    <a href={Workshop9}><li>Chapter9</li></a>
                                    <a href={Workshop10}><li>Chapter10</li></a>
                                    <a href={Workshop11}><li>Chapter11</li></a>
                                    <a href={Workshop12}><li>Chapter12</li></a>
                                    <a href={WorkshopM}><li>Materials</li></a>
                                    <a href={WorkshopBOOK1}><li id='book'>BOOK: Jain and Iyenger</li></a>
                                    <a href={Groover}><li id='book'>BOOK: Jain and Iyenger</li></a>

                                </ul>
                            </li>

                            <li>Environment and Climate Change
                                <ul id="sub_navlist">
                                    <a href={EcologyI}><li>Introduction</li></a>
                                    <a href={EcologyEC}><li>Environment Challanges</li></a>
                                    <a href={EcologyNR}><li>Natural Resources</li></a>
                                    <a href={EcologySD}><li>Sustainable Development</li></a>
                                    <a href={EcologyCF}><li>Carbon Foot Print</li></a>
                                    <a href={EcologyET}><li>Environment Treaties</li></a>
                                    <a href={EcologySEIA}><li>S.E.I.A</li></a>
                                    <a href={EcologyP}><li>Pollution</li></a>
                                    <a href={EcologyNotes}><li>Notes1</li></a>
                                </ul>
                            </li>

                            <div>
                                <li>Communication Skills
                                    <ul id="sub_navlist">
                                        <a href={CSW1}><li>Introduction</li></a>
                                        <a href={CSWOC}><li>Oral Communication</li></a>
                                        <a href={CSWGD}><li>Group Discussion</li></a>
                                        <a href={CSWI}><li>Interview</li></a>
                                        <a href={CSWBFIR}><li>B.F.I.R Model</li></a>
                                    </ul>
                                </li>
                            </div>

                            <div>
                                <li>Engineering Graphics
                                    <ul id="sub_navlist">
                                        <a href={GraphicsPP}><li>Projection of Points</li></a>
                                        <a href={GraphicsPL}><li>Projection of Lines</li></a>
                                        <a href={GraphicsSS}><li>Section of Solids</li></a>
                                        <a href={GraphicsKJ}><li>Knuckle Joint</li></a>
                                        <a href={GraphicsTF}><li>Threaded Fastners</li></a>
                                        <a href={GraphicsA1}><li>Autocad1</li></a>
                                        <a href={GraphicsA2}><li>Autocad2</li></a>
                                    </ul>
                                </li>
                            </div>


                            <div>
                                <li>Data Structure
                                    <ul id="sub_navlist">
                                        <a href={DSC}><li id='book'>BOOK: Data structures using C</li></a>
                                    </ul>
                                </li>
                            </div>

                            <div>
                                <li>Basic Electronics or Principle of Electronics
                                    <ul id="sub_navlist">
                                        <a href={POED1}><li>Diode1</li></a>
                                        <a href={POED2}><li>Diode2</li></a>
                                        <a href={POED3}><li>Diode3</li></a>
                                        <a href={POEBJT1}><li>BJT1</li></a>
                                        <a href={POEBF}><li>BJT & FET</li></a>
                                        <a href={POEFJM}><li>FET,JFET,MOSFET</li></a>
                                        <a href={POEOA1}><li>Operations Amplifier1</li></a>
                                        <a href={POEOA2}><li>Operations Amplifier2</li></a>
                                    </ul>
                                </li>
                            </div>

                            <div>
                                <li>Introduction to Artificial Intelligence
                                    <ul id="sub_navlist">
                                        <li id='book'>Available Soon</li>
                                    </ul>
                                </li>
                            </div>


                        </ul>
                    </div>


                </div>


                <div class="row copyright">
                    <div class="footer-menu">

                    </div>
                    <p>Copyright &copy; 2023Pendown. || All rights reserved</p>
                </div>
            </div>

        </div>

    )
}

export default firstyear
