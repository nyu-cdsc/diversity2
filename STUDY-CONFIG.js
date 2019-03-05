///////// Diversity2 /////////
// As a note, you can delete any of the commented stuff if you don't need to use the code!

///////// Stimuli /////////
var introductionvideo= [
  // movie where no response is recorded
  {
    type: 'action',
    id: 'studyIntro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_a/1 Study Intro.m4v' // This is the introductory video for version a
        }
      }     
    ]
  },
]

var TrainingVideos_a = [
  //movie with no response 1a
   //{
     //type: 'action',
     //id: 'training1a',
     //stimuli: [
     //  {
       //  type: 'movie',
         //parameters: {
           //filename: '../../../assets/movie/version_a/2 Training Recording 1 (spedup).m4v' // This is the introductory video for version a
         //}
       //}     
    // ]
   //},
    // movie where a response is recorded 2a
  {
    type: 'action',
    id: 'training2a',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_a/3 Training Recording 2.m4v', // movie, first one that records stimuli
          coordinates: [
            { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
        
        }
      }
    ]
  },
  //movie with no response 2.5a
  {
    type: 'action',
    id: 'training2.5a',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_a/4 Training Recording 2.5.m4v' // This is the introductory video for version a
        }
      }     
    ]
  },

 // movie where a response is recorded 3a

 {
  type: 'action',
  id: 'training3a',
  stimuli: [
    {
      type: 'movie',
      parameters: {
        filename: '../../../assets/movie/version_a/5 Training Recording 3.m4v', // movie
        coordinates: [
          { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
      }
    }
  ]
},
    //movie with no response 3.5a
  {
    type: 'action',
    id: 'training3.5a',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_a/6 Training Recording 3.5.m4v' // This is the introductory video for version a
        }
      }     
    ]
  },
     // movie where a response is recorded 4a

     {
      type: 'action',
      id: 'training4a',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_a/7 Training Recording 4.m4v', // movie
            coordinates: [
              { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
          }
        }
      ]
    },
    //movie with no response 4.5a
    {
      type: 'action',
      id: 'training4.5a',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_a/8 Training Recording 4.5.m4v' // This is the introductory video for version a
          }
        }     
      ]
    },

    // movie where a response is recorded 5a

    {
      type: 'action',
      id: 'training5a',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_a/9 Training Recording 5.m4v', // movie
            coordinates: [
              { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
          }
        }
      ]
    },
    //movie with no response 5.5a
    {
      type: 'action',
      id: 'training5.5a',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_a/10 Training Recording 5.5.m4v' // This is the introductory video for version a
          }
        }     
      ]
    },
    // movie where a response is recorded 6a

    {
      type: 'action',
      id: 'training6a',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_a/11 Training Recording 6.m4v', // movie
            coordinates: [
              { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
          }
        }
      ]
    },
    //movie with no response 6.5a
    {
      type: 'action',
      id: 'training6.5a',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_a/12 Training Recording 6.5.m4v' // This is the introductory video for version a
          }
        }     
      ]
    },
    //movie with no response practicetransitiona
    {
      type: 'action',
      id: 'ptransitiona',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_a/13 Practice Transition.m4v' // This is the introductory video for version a
          }
        }     
      ]
    },
      
    // movie where a response is recorded 1 cake a

    {
      type: 'action',
      id: 'cake1a',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_a/14 Item Training 1 Cake.m4v', // movie
            coordinates: [
              { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
          }
        }
      ]
    },
    //movie with no response 1.5 cake a
   {
      type: 'action',
      id: 'cake1.5a',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_a/15 Item Training 1.5 Cake.m4v' // This is the introductory video for version a
          }
        }     
      ]
    },
      
    // movie where a response is recorded 2 fingers a

    {
      type: 'action',
      id: 'fingers2a',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_a/16 Item Training 2 Fingers.m4v', // movie
            coordinates: [
              { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
          }
        }
      ]
    },
    //movie with no response 2.5 fingers a
  {
    type: 'action',
    id: 'fingers2.5a',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_a/17 Item Training 2.5 Fingers.m4v' // This is the introductory video for version a
        }
      }     
    ]
  },
   // movie where a response is recorded 3 girls a

   {
    type: 'action',
    id: 'girls3a',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_a/18 Item Training 3 Girls.m4v', // movie
          coordinates: [
            { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
        }
      }
    ]
  },
  //movie with no response 3.5 girls a
{
  type: 'action',
  id: 'girls3.5a',
  stimuli: [
    {
      type: 'movie',
      parameters: {
        filename: '../../../assets/movie/version_a/19 Item Training 3.5 Girls.m4v' // This is the introductory video for version a
      }
    }     
  ]
},
// movie where a response is recorded 4 pool a

{
  type: 'action',
  id: 'pool4a',
  stimuli: [
    {
      type: 'movie',
      parameters: {
        filename: '../../../assets/movie/version_a/20 Item Training 4 Pool.m4v', // movie
        coordinates: [
          { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
      }
    }
  ]
},
//movie with no response 4.5 pool a
{
type: 'action',
id: 'pool4.5a',
stimuli: [
  {
    type: 'movie',
    parameters: {
      filename: '../../../assets/movie/version_a/21 Item Training 4.5 Pool.m4v' // This is the introductory video for version a
    }
  }     
]
},
 // movie where a response is recorded 5 brothers a

 {
  type: 'action',
  id: 'brothers5a',
  stimuli: [
    {
      type: 'movie',
      parameters: {
        filename: '../../../assets/movie/version_a/22 Item Training 5 Brothers.m4v', // movie
        coordinates: [
          { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
      }
    }
  ]
},
//movie with no response 5.5 brothers a


  {
type: 'action',
id: 'brothers5.5a',
stimuli: [
  {
    type: 'movie',
    parameters: {
      filename: '../../../assets/movie/version_a/23 Item Training 5.5 Brothers.m4v' // This is the introductory video for version a
    }
  }     
]
  } 
    
  ]


  /////////////////////////////////// THIS IS THE START OF TRAINING VIDEOS B /////////////////////////////////////////////////

  var TrainingVideos_b = [
    //movie with no response 1b
    {
      type: 'action',
      id: 'training1b',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_b/2 Training 1.m4v' // This is the introductory video for version a
          }
        }     
      ]
    },
      // movie where a response is recorded 2.b
    {
      type: 'action',
      id: 'training2b',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_b/3 Training 2a.m4v', // movie, first one that records stimuli
            coordinates: [
              { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all
          }
        }
      ]
    },
    //movie with no response 2.5b
    {
      type: 'action',
      id: 'training2.5b',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_b/4 Training 2b.m4v' // This is the introductory video for version a
          }
        }     
      ]
    },
  
   // movie where a response is recorded 3b
  
   {
    type: 'action',
    id: 'training3b',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_b/5 Training 3a.m4v', // movie
          coordinates: [
            { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all
        }
      }
    ]
  },
      //movie with no response 3.5b
    {
      type: 'action',
      id: 'training3.5b',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_b/6 Training 3b.m4v' // This is the introductory video for version a
          }
        }     
      ]
    },
       // movie where a response is recorded 4b
  
       {
        type: 'action',
        id: 'training4b',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/7 Training 4a.m4v', // movie
              coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all
            }
          }
        ]
      },
      //movie with no response 4.5b
      {
        type: 'action',
        id: 'training4.5b',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/8 Training 4b.m4v' // This is the introductory video for version a
            }
          }     
        ]
      },
  
      // movie where a response is recorded 5b
  
      {
        type: 'action',
        id: 'training5b',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/9 Training 5a.m4v', // movie
              coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all
            }
          }
        ]
      },
      //movie with no response 5.5b
      {
        type: 'action',
        id: 'training5.5b',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/10 Training 5b.m4v' // This is the introductory video for version a
            }
          }     
        ]
      },
      // movie where a response is recorded 6b
  
      {
        type: 'action',
        id: 'training6b',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/11 Training 6a.m4v', // movie
              coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all
            }
          }
        ]
      },
      //movie with no response 6.5b
      {
        type: 'action',
        id: 'training6.5b',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/12 Training 6b.m4v' // This is the introductory video for version a
            }
          }     
        ]
      },
      //movie with no response practicetransitionb
      {
        type: 'action',
        id: 'ptransitionb',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/13 Practice Transition.m4v' // This is the introductory video for version b
            }
          }     
        ]
      },
        
      // movie where a response is recorded 1 cake b
  
      {
        type: 'action',
        id: 'cake1b',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/14 Item Training Cake a.m4v', // movie
              coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }
        ]
      },
      //movie with no response 1.5 cake b
     {
        type: 'action',
        id: 'cake1.5b',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/15 Item Training Cake b.m4v' // This is the introductory video for version a
            }
          }     
        ]
      },
        
      // movie where a response is recorded 2 fingers b
  
      {
        type: 'action',
        id: 'fingers2b',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/16 Item Training Fingers a.m4v', // movie
              coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }
        ]
      },
      //movie with no response 2.5 fingers b
    {
      type: 'action',
      id: 'fingers2.5b',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_b/17 Item Training Fingers b.m4v' // This is the introductory video for version a
          }
        }     
      ]
    },
     // movie where a response is recorded 3 girlsb
  
     {
      type: 'action',
      id: 'girls3b',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/version_b/18 Item Training Girls a.m4v', // movie
            coordinates: [
              { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
          }
        }
      ]
    },
    //movie with no response 3.5 girls b
  {
    type: 'action',
    id: 'girls3.5b',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_b/19 Item Training Girls b.m4v' // This is the introductory video for version a
        }
      }     
    ]
  },
  // movie where a response is recorded 4 pool b
  
  {
    type: 'action',
    id: 'pool4b',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_b/20 Item Training Pool a.m4v', // movie
          coordinates: [
            { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
        }
      }
    ]
  },
  //movie with no response 4.5 pool b
  {
  type: 'action',
  id: 'pool4.5b',
  stimuli: [
    {
      type: 'movie',
      parameters: {
        filename: '../../../assets/movie/version_b/21 Item Training Pool b.m4v' // This is the introductory video for version a
      }
    }     
  ]
  },
   // movie where a response is recorded 5 brothers b
  
   {
    type: 'action',
    id: 'brothers5b',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_b/22 Item Training Baby a.m4v', // movie
          coordinates: [
            { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
        }
      }
    ]
  },
  //movie with no response 5.5 brothers b
  
  
    {
  type: 'action',
  id: 'brothers5.5b',
  stimuli: [
    {
      type: 'movie',
      parameters: {
        filename: '../../../assets/movie/version_b/23 Item Training Baby b.m4v' // This is the introductory video for version a
      }
    }     
  ]
    } 
 ]
  


    //////////////////////////////////////SHUFFLE ORDER 1 FOR ANIMAL VIDEOS A///////////////////////////////

var shuffleorder1 = [
  {
    type: 'action',
    id: 'cheetaha_a',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_a/25 Cheetah A.m4v', // This is the cheetah A video for version A, shuffle order 1
           coordinates: [
            { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
        }
      }     
    ]
  },

  {
    type: 'action',
    id: 'porcb_a',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_a/29 Porcupine B.m4v', // This is the Porc. b video for version A, shuffle order 1
           coordinates: [
            { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
        }
      }     
    ]
  },

  {
    type: 'action',
    id: 'girc_a',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_a/26 Giraffe C.m4v', // This is the giraffe c video for version A, shuffle order 1
           coordinates: [
            { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
        }
      }     
    ]
  },

  {
    type: 'action',
    id: 'sharkc_a',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_a/30 Shark C.m4v', // This is the shark c video for version A, shuffle order 1
           coordinates: [
            { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
        }
      }     
    ]
  },

  {
    type: 'action',
    id: 'kanga_a',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_a/27 Kangaroo A.m4v', // This is the kangaroo a video for version A, shuffle order 1
           coordinates: [
            { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
        }
      }     
    ]
  },

  {
    type: 'action',
    id: 'lionb_a',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/version_a/28 Lion B.m4v', // This is the lion b video for version A, shuffle order 1
           coordinates: [
            { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
        }
      }     
    ]
  },
]


    //////////////////////////////////////SHUFFLE ORDER 2 FOR ANIMAL VIDEOS A///////////////////////////////

    var shuffleorder2 = [
      {
        type: 'action',
        id: 'cheetahb_a',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_a/25 Cheetah B.m4v', // This is the cheetah b video for version A, shuffle order 2
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    
      {
        type: 'action',
        id: 'porcc_a',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_a/29 Porcupine C.m4v', // This is the Porc.c video for version A, shuffle order 2
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    
      {
        type: 'action',
        id: 'gira_a',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_a/26 Giraffe A.m4v', // This is the giraffe a video for version A, shuffle order 2
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
            { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
            { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
            { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
            { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    
      {
        type: 'action',
        id: 'sharkb_a',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_a/30 Shark B.m4v', // This is the shark b video for version A, shuffle order 2
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    
      {
        type: 'action',
        id: 'kangc_a',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_a/27 Kangaroo C.m4v', // This is the kangaroo c video for version A, shuffle order 2
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    
      {
        type: 'action',
        id: 'liona_a',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_a/28 Lion A.m4v', // This is the lion a video for version A, shuffle order 2
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    ]

    //////////////////////////////////////SHUFFLE ORDER 3 FOR ANIMAL VIDEOS A///////////////////////////////

    var shuffleorder3 = [
      {
        type: 'action',
        id: 'cheetahc_a',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_a/25 Cheetah C.m4v', // This is the cheetah c video for version A, shuffle order 3
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    
      {
        type: 'action',
        id: 'porca_a',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_a/29 Porcupine A.m4v', // This is the Porc.a video for version A, shuffle order 3
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    
      {
        type: 'action',
        id: 'girb_a',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_a/26 Giraffe B.m4v', // This is the giraffe b video for version A, shuffle order 3
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    
      {
        type: 'action',
        id: 'sharka_a',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_a/30 Shark A.m4v', // This is the shark a video for version A, shuffle order 3
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    
      {
        type: 'action',
        id: 'kangb_a',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_a/27 Kangaroo B.m4v', // This is the kangaroo b video for version A, shuffle order 3
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    
      {
        type: 'action',
        id: 'lionc_a',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_a/28 Lion C.m4v', // This is the lion c video for version A, shuffle order 3
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    ]

///////////////////////////////////////////////////////START OF SHUFFLE ORDER CONDITION 2///////////////


    //////////////////////////////////////SHUFFLE ORDER 1 FOR ANIMAL VIDEOS B///////////////////////////////

    var shuffleorder1b = [
      {
        type: 'action',
        id: 'cheetaha_B',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/25 Cheetah A.m4v', // This is the cheetah A video for version 2, shuffle order 1
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    
      {
        type: 'action',
        id: 'porcb_b',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/29 Porcupine B.m4v', // This is the Porc. b video for version A, shuffle order 1
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    
      {
        type: 'action',
        id: 'girc_b',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/26 Giraffe C.m4v', // This is the giraffe c video for version A, shuffle order 1
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    
      {
        type: 'action',
        id: 'sharkc_b',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/30 Shark C.m4v', // This is the shark c video for version A, shuffle order 1
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    
      {
        type: 'action',
        id: 'kanga_b',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/27 Kangaroo A.m4v', // This is the kangaroo a video for version A, shuffle order 1
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    
      {
        type: 'action',
        id: 'lionb_b',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/version_b/28 Lion B.m4v', // This is the lion b video for version A, shuffle order 1
               coordinates: [
                { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
            }
          }     
        ]
      },
    ]
    
    
        //////////////////////////////////////SHUFFLE ORDER 2 FOR ANIMAL VIDEOS B///////////////////////////////
    
        var shuffleorder2b = [
          {
            type: 'action',
            id: 'cheetahb_b',
            stimuli: [
              {
                type: 'movie',
                parameters: {
                  filename: '../../../assets/movie/version_b/25 Cheetah B.m4v', // This is the cheetah b video for version A, shuffle order 2
                   coordinates: [
                    { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                    { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                    { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                    { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                    { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
                }
              }     
            ]
          },
        
          {
            type: 'action',
            id: 'porcc_b',
            stimuli: [
              {
                type: 'movie',
                parameters: {
                  filename: '../../../assets/movie/version_b/29 Porcupine C.m4v', // This is the Porc.c video for version A, shuffle order 2
                   coordinates: [
                    { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                    { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                    { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                    { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                    { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
                }
              }     
            ]
          },
        
          {
            type: 'action',
            id: 'gira_b',
            stimuli: [
              {
                type: 'movie',
                parameters: {
                  filename: '../../../assets/movie/version_b/26 Giraffe A.m4v', // This is the giraffe a video for version A, shuffle order 2
                   coordinates: [
                    { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                    { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                    { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                    { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                    { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
                }
              }     
            ]
          },
        
          {
            type: 'action',
            id: 'sharkb_b',
            stimuli: [
              {
                type: 'movie',
                parameters: {
                  filename: '../../../assets/movie/version_b/30 Shark B.m4v', // This is the shark b video for version A, shuffle order 2
                   coordinates: [
                    { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                    { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                    { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                    { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                    { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
                }
              }     
            ]
          },
        
          {
            type: 'action',
            id: 'kangc_b',
            stimuli: [
              {
                type: 'movie',
                parameters: {
                  filename: '../../../assets/movie/version_b/27 Kangaroo C.m4v', // This is the kangaroo c video for version A, shuffle order 2
                   coordinates: [
                    { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                    { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                    { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                    { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                    { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
                }
              }     
            ]
          },
        
          {
            type: 'action',
            id: 'liona_b',
            stimuli: [
              {
                type: 'movie',
                parameters: {
                  filename: '../../../assets/movie/version_b/28 Lion A.m4v', // This is the lion a video for version A, shuffle order 2
                   coordinates: [
                    { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                    { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                    { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                    { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                    { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
                }
              }     
            ]
          },
        ]
    
    
    
    
        //////////////////////////////////////SHUFFLE ORDER 3 FOR ANIMAL VIDEOS B///////////////////////////////
    
        var shuffleorder3b = [
          {
            type: 'action',
            id: 'cheetahc_b',
            stimuli: [
              {
                type: 'movie',
                parameters: {
                  filename: '../../../assets/movie/version_b/25 Cheetah C.m4v', // This is the cheetah c video for version A, shuffle order 3
                   coordinates: [
                    { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                    { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                    { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                    { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                    { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
                }
              }     
            ]
          },
        
          {
            type: 'action',
            id: 'porca_b',
            stimuli: [
              {
                type: 'movie',
                parameters: {
                  filename: '../../../assets/movie/version_b/29 Porcupine A.m4v', // This is the Porc.a video for version A, shuffle order 3
                   coordinates: [
                    { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                    { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                    { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                    { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                    { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
                }
              }     
            ]
          },
        
          {
            type: 'action',
            id: 'girb_b',
            stimuli: [
              {
                type: 'movie',
                parameters: {
                  filename: '../../../assets/movie/version_b/26 Giraffe B.m4v', // This is the giraffe b video for version A, shuffle order 3
                   coordinates: [
                    { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                    { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                    { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                    { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                    { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
                }
              }     
            ]
          },
        
          {
            type: 'action',
            id: 'sharka_b',
            stimuli: [
              {
                type: 'movie',
                parameters: {
                  filename: '../../../assets/movie/version_b/30 Shark A.m4v', // This is the shark a video for version A, shuffle order 3
                   coordinates: [
                    { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                    { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                    { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                    { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                    { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
                }
              }     
            ]
          },
        
          {
            type: 'action',
            id: 'kangb_b',
            stimuli: [
              {
                type: 'movie',
                parameters: {
                  filename: '../../../assets/movie/version_b/27 Kangaroo B.m4v', // This is the kangaroo b video for version A, shuffle order 3
                   coordinates: [
                    { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                    { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                    { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                    { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                    { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
                }
              }     
            ]
          },
        
          {
            type: 'action',
            id: 'lionc_b',
            stimuli: [
              {
                type: 'movie',
                parameters: {
                  filename: '../../../assets/movie/version_b/28 Lion C.m4v', // This is the lion c video for version A, shuffle order 3
                   coordinates: [
                    { value: '1', shape: "rect", coordinates: "50, 300, 350, 600" }, // just two
                    { value: '2', shape: "rect", coordinates: "425, 300, 725, 600" }, // a few
                    { value: '3', shape: "rect", coordinates: "800, 300, 1100, 600" },//some
                    { value: '4', shape: "rect", coordinates: "1175, 300, 1475, 600" },//most
                    { value: '5', shape: "rect", coordinates: "1575, 300, 1875, 600" }], // all,
                }
              }     
            ]
          },
        ]
    
    
    
        

    

  // picture where a response is recorded
  // {
  //   type: 'action',
  //   id: 'frictionQ1',
  //   stimuli: [
  //     {
  //       type: 'picture',
  //       parameters: {
  //         filename: '../../../assets/picture/content/Friction1.jpeg',
  //         coordinates: [
  //           { value: 'left', shape: "rect", coordinates: "120, 56, 370, 728" },
  //           { value: 'right', shape: "rect", coordinates: "672, 48, 926, 732" }],
  //       },
  //     }
  //   ]
  // },;

///////// Sample way to Start Game ////////
var startGame = [


  {
    type: 'action',
    id: 'start',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/start.jpeg',
          coordinates: [
            { value: 'started', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  }
];




///////// Randomization /////////
// var exampleRandom = [
//   // first list the stimuli you want to randomize. I've listed two movies.
//   {
//     type: 'action',
//     id: 'frictionIntro',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/content/intro_to_content_study.mp4' // type the location of the movie
//         }
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'friction1',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/content/Friction1.mp4', // movie
//         }
//       }
//     ]
//   },
//   // next add the shuffle control
//   {
//     type: 'control',
//     shuffle: true
//   }
// ]


///////// Conditionals & Contigent Feedback /////////

// Below is an example of how to give participants contigent feedback,
// var contingentFeedback = [
//   // List the stimuli that you want participants to get contigent feedback from
//   // E.g., In this example, participants watch a movie and give a response on a 6-point scale
//   {
//     type: 'action',
//     id: 'example',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/persistence/wood.mp4',
//           coordinates: [
//             { value: 'one', shape: "rect", coordinates: "161, 646, 250, 740" }, // you'll need these values for later
//             { value: 'two', shape: "rect", coordinates: "282, 646, 370, 740" },
//             { value: 'three', shape: "rect", coordinates: "400, 646, 490, 740" },
//             { value: 'four', shape: "rect", coordinates: "518, 646, 608, 740" },
//             { value: 'five', shape: "rect", coordinates: "634, 646, 726, 740" },
//             { value: 'six', shape: "rect", coordinates: "756, 646, 844, 740" },
//           ],
//         }
//       }
//     ]
//   },
//   // Next, use a 'conditional' object to specify what happens based on the response participants gave.
//   {
//     type: 'conditional',
//     id: 'woodConditional', // this id can be whatever you want
//     items: {
//       // list the response participants gave
//       'one': [{ // this needs to map onto the values from the buttons from above
//         type: 'action',
//         id: 'wood1',
//         // list what you want them to see based on that response
//         // in this case, they are seeing a movie
//         stimuli: [
//           {
//             type: 'movie',
//             parameters: {
//               filename: '../../../assets/movie/persistence/wood_1.mp4',
//             }
//           }
//         ]
//       }],
//       // do a conditional for each response that you want participants to have contingent feedback for
//       'two': [{
//         type: 'action',
//         id: 'wood2',
//         stimuli: [
//           {
//             type: 'movie',
//             parameters: {
//               filename: '../../../assets/movie/persistence/wood_2.mp4',
//             }
//           }
//         ]
//       }],
//       'three': [{
//         type: 'action',
//         id: 'wood3',
//         stimuli: [
//           {
//             type: 'movie',
//             parameters: {
//               filename: '../../../assets/movie/persistence/wood_3.mp4',
//             }
//           }
//         ]
//       }],
//       'four': [{
//         type: 'action',
//         id: 'wood4',
//         stimuli: [
//           {
//             type: 'movie',
//             parameters: {
//               filename: '../../../assets/movie/persistence/wood_4.mp4',
//             }
//           }
//         ]
//       }],
//       'five': [{
//         type: 'action',
//         id: 'wood5',
//         stimuli: [
//           {
//             type: 'movie',
//             parameters: {
//               filename: '../../../assets/movie/persistence/wood_5.mp4',
//             }
//           }
//         ]
//       }],
//       'six': [{
//         type: 'action',
//         id: 'wood6',
//         stimuli: [
//           {
//             type: 'movie',
//             parameters: {
//               filename: '../../../assets/movie/persistence/wood_6.mp4',
//             }
//           }
//         ]
//       }],
//     },
//   },
// ];


// Sometimes you might want a participant to conditionally do different blocks (and not just see a different video or picture).
// Here's an example of this.
// var conditionalExample = [
//   {
//     type: 'action',
//     id: 'sample',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/persistence/transition_1st.mp4',
//           coordinates: [
//             { value: 'left', shape: "rect", coordinates: "110, 332, 430, 448" },
//             { value: 'right', shape: "rect", coordinates: "642, 244, 912, 518" }],
//         }
//       }
//     ]
//   },
//   {
//     type: 'conditional',
//     id: 'persistence1',
//     items: {
//       'left':
//         block1
//       ,
//       'right':
//         block2
//     }
//   },
// ]

///////// Forms /////////
// To make a form, you create an option similar to the one below.
// You can make as many separate forms as you want. To create a new form,
// create another form variable by copying and pasting the template below
// and providing a new name for the var (i.e., change "var forms" to another name (e.g., "var differentForm"))
// I would generally limit the number of questions per screen to about 5

 var forms = {
   type: 'action',
   id: 'form', // you can change the name of this form to whatever
   stimuli: [
     {
       type: 'form',
       parameters: {
         questions: [
//           // this is where you put the questions on the form
//           // each line reflects its own question
//           // you can have two types of questions as of now: "text" and "dropdown"
//           // 'name:' specifies the id that will be outputed into the exported data csv file
//           // 'type:' specifies the type of question you want, "text" or "dropdown"
//           // 'questionText:' specifies the question that will be displayed on the screen
//           // 'options:' specifies the options for the dropdown question; you do not use 'options' for text questions
           { name: 'id', type: "text", questionText: "Participant ID" },
           { name: 'gender', type: "dropdown", options: ["female", "male", "other"], questionText: "Participant Gender" },
           { name: 'age', type: "dropdown", options: ["4", "5", "6" , "7" , "8" , "9" , "10"], questionText: "Participant Age" },
//           { name: 'color', type: "text", questionText: "What's your favorite color?" }
         ],
       }
     }
   ]
 }


///////// The Conditions /////////
// These are your conditions. You can have as many conditions as you want.
// To create more conditions, just copy the format of the ones below.
// Conditions are composed of a series of blocks.
// Generally, the blocks within a condition will be displayed in linear order

var versionA_shuffle1 = [
  //forms,
 // startGame,
 // introductionvideo,
  TrainingVideos_a,
    shuffleorder1
];

var versionA_shuffle2 = [
  //forms,
 // startGame,
 // introductionvideo,
  TrainingVideos_a,
    shuffleorder2
];

var versionA_shuffle3 = [
  //forms,
 // startGame,
 // introductionvideo,
  TrainingVideos_a,
    shuffleorder3
];

var versionB_shuffle1 = [
  //forms,
  startGame,
  //introductionvideo,
  TrainingVideos_b,
    shuffleorder1b,
  ];

  var versionB_shuffle2 = [
    //forms,
    startGame,
    //introductionvideo,
    TrainingVideos_b,
      shuffleorder2b
    ];

    var versionB_shuffle3 = [
      //forms,
      startGame,
      //introductionvideo,
      TrainingVideos_b,
        shuffleorder3b
      ];




 // For blocks to be randomly displayed, use the "shuffle" control
  // E.g., the next 2 blocks are displayed in random order
  // the [] specify which blocks I want to be randomized
  // and the control within the {} specifies it be shuffled randomly
  // [
  //   block1,
  //   block2,
  //   {
  //     type: 'control',
  //     shuffle: true
  //   }
  // ],
  // conditionalExample


// var Condition2 = [
//   startGame,
//   contingentFeedback,
//   conditionalExample
// ];


///////// The Study /////////
// This is the study block
// Here is where you list which conditions to include in the study,
// the name of the study, and the last thing that happens in the study

export const Project = {
  conditions: [ // list all of your conditions here. Participants are randomly assigned to one of them
    versionA_shuffle1,
    versionA_shuffle2,
    versionA_shuffle3,
    versionB_shuffle1,
    versionB_shuffle2,
    versionB_shuffle3
    // Condition2
  ],
  name: "Diversity2", 
  ended: { // this what happens when your study ends i.e., the last thing that happens before the study restarts
    // right now, I have it set to play a movie that says "Great job!"
    type: 'action',
    id: 'done',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/End.mp4',
        }
      }
    ]
  }
}
